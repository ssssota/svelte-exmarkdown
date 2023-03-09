<script lang="ts">
	import { getComponentsContext } from '../contexts';
	import type { HastNode } from '../types';
	import Children from './Children.svelte';
	export let astNode: HastNode;
	export let __index = 0;

	export let type: unknown = undefined;
	export let position: unknown = undefined;
	// HACK: ignore `unused-export-let`
	type && position;

	const components = getComponentsContext();
</script>

{#if astNode.type === 'root'}
	<Children {...astNode} />
{:else if astNode.type === 'element'}
	<svelte:component
		this={$components[astNode.tagName]}
		{...astNode}
		{__index}
	/>
{:else if $components[astNode.type] !== undefined}
	<svelte:component this={$components[astNode.type]} {...astNode} {__index} />
{/if}
