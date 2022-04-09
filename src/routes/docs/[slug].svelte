<script lang="ts">
	import { base } from '$app/paths';
	import Markdown, { type Plugin } from '$lib';
	import { gfmPlugin } from '$lib/gfm';
	import H2 from '$lib/renderer/html/H2.svelte';
	import H3 from '$lib/renderer/html/H3.svelte';
	import H4 from '$lib/renderer/html/H4.svelte';
	import H5 from '$lib/renderer/html/H5.svelte';
	import H6 from '$lib/renderer/html/H6.svelte';
	import { highlightPlugin } from '../../prism';
	import { mermaidPlugin } from '../../mermaid';
	export let md: string;
	export let prev: [string, string] | undefined;
	export let next: [string, string] | undefined;

	const plugins: Plugin[] = [
		gfmPlugin,
		mermaidPlugin,
		highlightPlugin,
		{
			renderer: {
				h1: H2,
				h2: H3,
				h3: H4,
				h4: H5,
				h5: H6,
				h6: H6
			}
		}
	];
</script>

<p>
	<a href="{base}/docs">&lt; Back to index</a>
</p>

<Markdown {md} {plugins} />

<nav>
	{#if prev}
		<a href="{base}/docs/{prev[0]}">{prev[1]}</a>
	{:else}
		<div />
	{/if}
	{#if next}
		<a href="{base}/docs/{next[0]}">{next[1]}</a>
	{:else}
		<div />
	{/if}
</nav>

<style>
	nav {
		width: 100%;
		display: flex;
		gap: 1em;
	}
	nav > a {
		flex-grow: 1;
		height: 5em;
		display: flex;
		border: 1px #ccc solid;
		border-radius: 0.5em;
		padding: 1em;
		align-items: center;
	}
	nav > div {
		flex-grow: 1;
	}
</style>
