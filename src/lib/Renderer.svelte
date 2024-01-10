<script lang="ts">
	import {
		createAstContextValue,
		getComponentsMap,
		setAstContext
	} from './contexts';
	import type { HastNode } from './types';
	import { resolveComponent } from './utils';
	export let astNode: HastNode;
	import Element from './Element/Element.svelte';

	const components = getComponentsMap();

	const astContext = createAstContextValue(astNode);
	$: astContext.set(astNode);
	setAstContext(astContext);

	// HACK: This looks like the worst formatting, but it prevents the library from rendering unexpected spaces.
</script>

{#if astNode.type === 'root'}{#each astNode.children as child}<svelte:self
			astNode={child}
		/>{/each}{:else if astNode.type === 'element'}{@const component =
		resolveComponent(
			$components,
			astNode.tagName
		)}{#if typeof component === 'string'}{#if Array.isArray(astNode.children) && astNode.children.length !== 0}<Element
				component={component}
				{...astNode.properties}
				>{#each astNode.children as child}<svelte:self
						astNode={child}
					/>{/each}</Element
			>{:else}<Element
				component={component}
				{...astNode.properties}
			/>{/if}{:else if component !== null}{#if Array.isArray(astNode.children) && astNode.children.length !== 0}<svelte:component
				this={component}
				{...astNode.properties}
				>{#each astNode.children as child}<svelte:self
						astNode={child}
					/>{/each}</svelte:component
			>{:else}<svelte:component
				this={component}
				{...astNode.properties}
			/>{/if}{/if}{:else if astNode.type === 'text' || astNode.type === 'raw'}{astNode.value}{/if}
