<script lang="ts">
	import SvelteExmarkdown from '$lib';
	import { gfmPlugin } from '$lib/gfm';
	import type { Parser, Plugin } from '$lib/types';
	import { createParser } from '$lib/utils';
	import rehypeRaw from 'rehype-raw';
	import remarkMDC from 'remark-mdc';
	import Readme from '../../README.md?raw';
	import Header from './Header.svelte';
	import { highlightPlugin } from './docs/_highlight';
	import { mermaidPlugin } from './docs/_mermaid';

	let html = false;
	let gfm = true;
	let ast = false;
	let md = Readme;
	let plugins: Plugin[];
	$: plugins = [
		...(gfm ? [gfmPlugin()] : []),
		...(html ? [{ rehypePlugin: rehypeRaw }] : []),
		{ remarkPlugin: remarkMDC } as Plugin,
		highlightPlugin,
		mermaidPlugin
	];
	let parse: Parser;
	$: parse = createParser(plugins);
</script>

<div class="wrapper">
	<Header>
		<div>
			<label><input type="checkbox" bind:checked={html} />HTML</label>
		</div>
		<div>
			<label><input type="checkbox" bind:checked={gfm} />GFM</label>
		</div>
		<div>
			<label><input type="checkbox" bind:checked={ast} />AST</label>
		</div>
	</Header>
	<main>
		<textarea class="input" bind:value={md} />

		<section class="output">
			{#if ast}
				<pre>{JSON.stringify(
						parse(md),
						(key, value) => (key === 'position' ? undefined : value),
						'  '
					)}</pre>
			{:else}
				<SvelteExmarkdown {md} {plugins} />
			{/if}
		</section>
	</main>
</div>

<style>
	.wrapper {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
	main {
		display: flex;
		flex-grow: 1;
	}
	.input,
	.output {
		height: 100%;
		width: 50%;
		overflow-y: auto;
	}
	.input {
		resize: none;
		font-family: monospace;
		font-size: 1.2em;
	}
	.output {
		padding: 1em 2em;
	}
</style>
