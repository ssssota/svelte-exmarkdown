<script lang="ts">
	import { getComponentsContext } from '$lib/contexts';
	import type { Node } from '../types';
	import Children from './Children.svelte';
	import Text from './Text.svelte';
	export let astNode: Node;
	export let __index = 0;

	type AnyNode = Node & { children: Node[]; type: string; tagName: string; value: string };
	let node: AnyNode;
	$: node = astNode as AnyNode;

	const components = getComponentsContext();

	console.log({ astNode, node, components });
</script>

{#if node.type === 'root'}
	<Children {...node} />
{:else if node.type === 'element'}
	<svelte:component this={$components[node.tagName]} {...node} {__index} />
{:else if node.type === 'text'}
	<Text {...node} />
{/if}
