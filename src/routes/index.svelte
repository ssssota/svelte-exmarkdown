<script lang="ts">
	import { base } from '$app/paths';

	import SvelteExmarkdown from '$lib';
	import { gfmPlugin } from '$lib/gfm';
	import type { Parser, Plugin } from '$lib/types';
	import { createParser } from '$lib/utils';
	import { highlightPlugin } from './_prism';
	import Readme from '../../README.md?raw';
	let gfm = true;
	let ast = false;
	let md = Readme;
	let plugins: Plugin[];
	$: plugins = [...(gfm ? [gfmPlugin] : []), highlightPlugin];
	let parse: Parser;
	$: parse = createParser(plugins);
</script>

<div class="wrapper">
	<header>
		<h1>svelte-exmarkdown</h1>
		<div class="spacer" />
		<nav class="right">
			<div>
				<label><input type="checkbox" bind:checked={gfm} />GFM</label>
			</div>
			<div>
				<label><input type="checkbox" bind:checked={ast} />AST</label>
			</div>
			<div>
				<a class="link" href="{base}/docs">Docs</a>
			</div>
			<div>
				<a class="link" target="_blank" href="https://www.npmjs.com/package/svelte-exmarkdown">
					npm
				</a>
			</div>
			<div>
				<a class="link" target="_blank" href="https://github.com/ssssota/svelte-exmarkdown">
					GitHub
				</a>
			</div>
		</nav>
	</header>

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
	header {
		padding: 0 2em;
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
	}
	.spacer {
		flex-grow: 1;
	}
	.right {
		display: flex;
		gap: 1em;
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
