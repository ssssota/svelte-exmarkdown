<script lang="ts">
	import { base } from '$app/paths';
	import Markdown, { type Plugin } from '$lib';
	import { gfmPlugin } from '$lib/gfm';
	import { highlightPlugin } from '../../prism';
	import { mermaidPlugin } from '../../mermaid';
	export let md: string;
	export let prev: [string, string] | undefined;
	export let next: [string, string] | undefined;

	const plugins: Plugin[] = [gfmPlugin, mermaidPlugin, highlightPlugin];
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
		padding: 1em 0;
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
