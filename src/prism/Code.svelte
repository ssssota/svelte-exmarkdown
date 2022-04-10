<script lang="ts">
	import type { HastNode } from '$lib/types';
	import Children from '../lib/renderer/Children.svelte';
	import Prismjs from 'prismjs';
	import 'prism-svelte';
	export let children: HastNode[];
	export let properties: Record<string, unknown>;

	let lang: string | undefined;
	$: lang = String(properties.class).match(/language-(\w+)/)?.[1];
	let child: HastNode;
	$: child = children[0];
</script>

{#if lang == null || Prismjs.languages[lang] == null || child?.type !== 'text'}<code {...properties}
		><Children {children} /></code
	>{:else}<code {...properties}
		>{@html Prismjs.highlight(child.value, Prismjs.languages[lang], lang)}</code
	>{/if}

<style>
	code {
		background-color: var(--background);
	}
</style>
