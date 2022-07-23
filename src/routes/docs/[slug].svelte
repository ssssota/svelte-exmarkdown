<script lang="ts">
	import { base } from '$app/paths';
	import Markdown, { type Plugin } from '$lib';
	import { gfmPlugin } from '$lib/gfm';
	import { highlightPlugin } from '../_prism';
	import { mermaidPlugin } from './_mermaid';
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
		display: grid;
		gap: 1em;
		grid-template-columns: 1fr 1fr;
	}
	nav > a {
		height: 5em;
		display: flex;
		border: 1px #ccc solid;
		border-radius: 0.5em;
		padding: 1em;
		align-items: center;
	}
</style>
