<script lang="ts">
	import { getComponentsContext } from '../contexts';
	import type { HastNode } from '../types';
	import Children from './Children.svelte';
	export let astNode: HastNode;
	export let __index = 0;

	const components = getComponentsContext();
</script>

{#if astNode.type === 'root'}
	<Children {...astNode} />
{:else if astNode.type === 'element'}
	<svelte:component this={$components[astNode.tagName]} {...astNode} {__index} />
{:else if astNode.type === 'text'}
	<svelte:component this={$components['text']} {...astNode} {__index} />
{/if}
