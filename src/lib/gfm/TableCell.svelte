<script lang="ts">
	import type { HastNode } from '$lib/types';
	import Children from '../renderer/Children.svelte';
	export let tagName: string;
	export let children: HastNode[] = [];
	export let properties: Record<string, unknown>;
</script>

<!-- prettier-ignore -->
<svelte:element this={tagName} {...properties}><Children {children} /></svelte:element>
