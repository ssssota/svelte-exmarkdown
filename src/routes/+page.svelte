<script lang="ts">
	import SvelteExmarkdown from '$lib';
	import { gfmPlugin } from '$lib/gfm';
	import type { Parser, Plugin } from '$lib/types';
	import { createParser } from '$lib/utils';
	import rehypeRaw from 'rehype-raw';
	import Readme from '../../README.md?raw';
	import Header from './Header.svelte';
	import { highlightPlugin } from './docs/_highlight';
	import { mermaidPlugin } from './docs/_mermaid';

	let html = $state(false);
	let gfm = $state(true);
	let ast = $state(false);
	let md = $state(Readme);
	let plugins = $derived<Plugin[]>([
		...(gfm ? [gfmPlugin()] : []),
		...(html ? [{ rehypePlugin: rehypeRaw }] : []),
		highlightPlugin,
		mermaidPlugin
	]);
	let parse = $derived<Parser>(createParser(plugins));
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
		<textarea class="input" bind:value={md}></textarea>

		<section class="output">
			{#if ast}
				<pre>{JSON.stringify(
						parse(md),
						(key, value) => (key === 'position' ? undefined : value),
						'  '
					)}</pre>
			{:else}
				<SvelteExmarkdown {md} {plugins}>
					{#snippet h1(props)}
						{@const { children, style, ...rest } = props}
						<h1 style="border-bottom:1px solid #999;{style}" {...rest}>
							{@render children?.()}
						</h1>
					{/snippet}
				</SvelteExmarkdown>
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
