<svelte:options runes={false} />

<script lang="ts">
	import { base } from '$app/paths';
	import Markdown, { type Plugin } from '$lib';
	import { gfmPlugin } from '$lib/gfm';
	import { examplePlugin } from '../_example';
	import { highlightPlugin } from '../_highlight';
	import { mermaidPlugin } from '../_mermaid';
	import { getTitleFromMarkdown } from '../utils';
	import type { PageData } from './$types';
	export let data: PageData;

	const plugins: Plugin[] = [
		examplePlugin,
		gfmPlugin(),
		mermaidPlugin,
		highlightPlugin
	];
</script>

<Markdown md={data.markdown} {plugins} />

<nav>
	{#if data.prev}
		<a href="{base}/docs/{data.prev.slug}">
			{getTitleFromMarkdown(data.prev.markdown)}
		</a>
	{:else}
		<div />
	{/if}
	{#if data.next}
		<a href="{base}/docs/{data.next.slug}">
			{getTitleFromMarkdown(data.next.markdown)}
		</a>
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
	:global(.example-output) {
		padding: 2em;
		border: 1px #ccc solid;
		border-radius: 0.5em;
	}
</style>
