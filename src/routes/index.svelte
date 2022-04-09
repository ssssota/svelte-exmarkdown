<script lang="ts">
	import SvelteExmarkdown from '$lib';
	import { gfmPlugin } from '$lib/gfm';
	import type { Parser, Plugin } from '$lib/types';
	import { createParser } from '$lib/utils';
	let gfm = true;
	let ast = false;
	let md = `
# test

hello

|key|value|
|---|-----|
|1  |test |
`;
	let plugins: Plugin[];
	$: plugins = [...(gfm ? [gfmPlugin] : [])];
	let parse: Parser;
	$: parse = createParser(plugins);
</script>

<div class="wrapper">
	<header>
		<h1>svelte-exmarkdown</h1>
		<div class="spacer" />
		<div>
			<label><input type="checkbox" bind:checked={gfm} />GFM</label>
		</div>
		<div>
			<label><input type="checkbox" bind:checked={ast} />AST</label>
		</div>
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
