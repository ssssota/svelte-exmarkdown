<script lang="ts">
	import Renderer from './Renderer.svelte';
	import {
		createAstContextValue,
		getComponentsMap,
		setAstContext
	} from './contexts';
	import type { HastNode } from './types';
	import { isSvgTag, resolveComponent } from './utils';
	type Props = {
		astNode: HastNode;
	};
	let { astNode }: Props = $props();

	const components = getComponentsMap();

	const astContext = createAstContextValue(astNode);
	$effect(() => {
		astContext.set(astNode);
	});
	setAstContext(astContext);

	// HACK: This looks like the worst formatting, but it prevents the library from rendering unexpected spaces.
</script>

{#if astNode.type === 'root'}{#each astNode.children as child}<Renderer
			astNode={child}
		/>{/each}{:else if astNode.type === 'element'}{@const Component =
		resolveComponent(
			$components,
			astNode.tagName
		)}{#if typeof Component === 'string'}{#if isSvgTag(Component)}{#if Array.isArray(astNode.children) && astNode.children.length !== 0}<svelte:element
					this={Component}
					xmlns="http://www.w3.org/2000/svg"
					{...astNode.properties}
					>{#each astNode.children as child}<Renderer
							astNode={child}
						/>{/each}</svelte:element
				>{:else}<svelte:element
					this={Component}
					xmlns="http://www.w3.org/2000/svg"
					{...astNode.properties}
				/>{/if}{:else if Array.isArray(astNode.children) && astNode.children.length !== 0}<svelte:element
				this={Component}
				{...astNode.properties}
				>{#each astNode.children as child}<Renderer
						astNode={child}
					/>{/each}</svelte:element
			>{:else}<svelte:element
				this={Component}
				{...astNode.properties}
			/>{/if}{:else if Component !== null}{#if Array.isArray(astNode.children) && astNode.children.length !== 0}<Component
				{...astNode.properties}
				>{#each astNode.children as child}<Renderer
						astNode={child}
					/>{/each}</Component
			>{:else}<Component
				{...astNode.properties}
			/>{/if}{/if}{:else if astNode.type === 'text' || astNode.type === 'raw'}{astNode.value}{/if}
