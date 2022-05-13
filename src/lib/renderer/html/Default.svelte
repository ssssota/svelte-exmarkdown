<script lang="ts">
	import type { HastNode } from '$lib/types';
	import Children from '../Children.svelte';
	export let tagName: string;
	export let children: HastNode[] | undefined;
	export let properties: Record<string, unknown>;
</script>

{#if Array.isArray(children) && children.length !== 0}
	<!-- prettier-ignore -->
	<svelte:element this={tagName} {...properties}><Children {children} /></svelte:element>
{:else}
	<!-- prettier-ignore -->
	<svelte:element this={tagName} {...properties} />
{/if}
