<script lang="ts">
	import SvelteExmarkdown from '$lib';
	import { gfmPlugin } from '$lib/gfm';
	import type { Node, Plugin } from '$lib/types';
	import { createParser } from '$lib/utils';
	import '../app.css';
	let gfm = true;
	let ast = false;
	let input = `
# test

hello

|key|value|
|---|-----|
|1  |test |
`;
	let plugins: Plugin[];
	$: plugins = [...(gfm ? [gfmPlugin] : [])];
	let parse: (md: string) => Node;
	$: parse = createParser(plugins);
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.css" />
</svelte:head>

<header>
	<h1>svelte-exmarkdown</h1>
	<div>
		<label><input type="checkbox" bind:checked={gfm} />GFM</label>
	</div>
	<div>
		<label><input type="checkbox" bind:checked={ast} />AST</label>
	</div>
</header>

<main>
	<textarea class="input" bind:value={input} />

	<section class="output">
		{#if ast}
			<pre>{JSON.stringify(
					parse(input),
					(key, value) => (key === 'position' ? undefined : value),
					'  '
				)}</pre>
		{:else}
			<SvelteExmarkdown {input} {plugins} />
		{/if}
	</section>
</main>

<style>
	:root {
		--header-height: 5em;
	}
	header {
		height: var(--header-height);
		display: flex;
		align-items: baseline;
	}
	main {
		display: flex;
		height: calc(100vh - var(--header-height));
	}
	.input,
	.output {
		height: 100%;
		width: 50%;
		overflow-y: auto;
	}

	.input {
		background-color: #f5f5f5;
		resize: none;
	}
	.output {
		padding: 1em 2em;
	}
</style>
