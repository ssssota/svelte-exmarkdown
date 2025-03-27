<script lang="ts">
	import Renderer from './Renderer.svelte';
	import { getComponentsMap, ref, setAstContext } from './contexts.svelte';
	import type { HastNode } from './types';
	import { isSvgTag, resolveComponent, snippetRendererMarker } from './utils';
	type Props = {
		astNode: HastNode;
	};
	let { astNode }: Props = $props();

	const components = getComponentsMap();

	const astContext = ref(astNode);
	$effect(() => {
		astContext.current = astNode;
	});
	setAstContext(astContext);
</script>

{#snippet children(nodes: HastNode[])}
	{#each nodes as node}
		<Renderer astNode={node} />
	{/each}
{/snippet}

{#if astNode.type === 'root'}
	{@render children(astNode.children)}
{:else if astNode.type === 'element'}
	{@const Component = resolveComponent(components.current, astNode.tagName)}
	{#if typeof Component === 'string'}
		{#if isSvgTag(Component)}
			{#if Array.isArray(astNode.children) && astNode.children.length !== 0}
				<svelte:element
					this={Component}
					xmlns="http://www.w3.org/2000/svg"
					{...astNode.properties}
				>
					{@render children(astNode.children)}
				</svelte:element>
			{:else}
				<svelte:element
					this={Component}
					xmlns="http://www.w3.org/2000/svg"
					{...astNode.properties}
				/>
			{/if}
		{:else if Array.isArray(astNode.children) && astNode.children.length !== 0}
			<svelte:element this={Component} {...astNode.properties}>
				{@render children(astNode.children)}
			</svelte:element>
		{:else}
			<svelte:element this={Component} {...astNode.properties} />
		{/if}
	{:else if Component !== null}
		{#if snippetRendererMarker in Component && Component[snippetRendererMarker]}
			{#if Array.isArray(astNode.children) && astNode.children.length !== 0}
				{#snippet _children()}
					{@render children(astNode.children)}
				{/snippet}
				{@render Component({ ...astNode.properties, children: _children })}
			{:else}
				{@render Component(astNode.properties)}
			{/if}
		{:else if Array.isArray(astNode.children) && astNode.children.length !== 0}
			<Component {...astNode.properties}>
				{@render children(astNode.children)}
			</Component>
		{:else}
			<Component {...astNode.properties} />
		{/if}
	{/if}
{:else if astNode.type === 'text' || astNode.type === 'raw'}
	{astNode.value}
{/if}
