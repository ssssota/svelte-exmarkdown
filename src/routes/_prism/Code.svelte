<script lang="ts">
	import type { HastNode } from '$lib/types';
	import Children from '$lib/renderer/Children.svelte';
	import { highlight, languages } from './prism';
	export let children: HastNode[];
	export let properties: Record<string, unknown>;

	let lang: string | undefined;
	$: lang = String(properties.class).match(/language-(\w+)/)?.[1];
	let child: HastNode;
	$: child = children[0];
</script>

{#if lang == null || languages[lang] == null || child?.type !== 'text'}<code
		{...properties}><Children {children} /></code
	>{:else}<code {...properties}
		>{@html highlight(child.value, languages[lang], lang)}</code
	>{/if}

<style>
	code {
		background-color: var(--background);
	}
</style>
