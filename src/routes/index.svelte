<script lang="ts">
	import SvelteExmarkdown from '$lib';
	import { gfmPlugin } from '$lib/gfm';
	import '../app.css';
	let input = `
# test

hello

|key|value|
|---|-----|
|1  |test |
`;
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.css" />
</svelte:head>

<main>
	<textarea class="input" bind:value={input} />

	<section class="output">
		<SvelteExmarkdown {input} plugins={[gfmPlugin]} />
	</section>
</main>

<style>
	main {
		display: flex;
	}
	.input,
	.output {
		height: 100vh;
		width: 50vw;
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
