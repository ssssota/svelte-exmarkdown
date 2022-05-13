<script lang="ts">
	import type { HastNode } from '$lib/types';
	import Children from '../lib/renderer/Children.svelte';
	import Prism from './prism';
	export let children: HastNode[];
	export let properties: Record<string, unknown>;

	let lang: string | undefined;
	$: lang = String(properties.class).match(/language-(\w+)/)?.[1];
	let child: HastNode;
	$: child = children[0];
</script>

{#if lang == null || Prism.languages[lang] == null || child?.type !== 'text'}<code {...properties}
		><Children {children} /></code
	>{:else}<code {...properties}
		>{@html Prism.highlight(child.value, Prism.languages[lang], lang)}</code
	>{/if}

<style>
	code {
		background-color: var(--background);
	}
</style>
