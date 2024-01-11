<script lang="ts">
	import SVGElement from './SVGElement.svelte';
	import {
		createAstContextValue,
		getComponentsMap,
		setAstContext
	} from './contexts';
	import type { HastNode } from './types';
	import { resolveComponent, svgTags as typedSvgTags } from './utils';
	export let astNode: HastNode;
	const svgTags: readonly string[] = typedSvgTags;

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
		)}{#if typeof component === 'string'}{#if svgTags.includes(component)}{#if Array.isArray(astNode.children) && astNode.children.length !== 0}<SVGElement
					__tag={component}
					{...astNode.properties}
					>{#each astNode.children as child}<svelte:self
							astNode={child}
						/>{/each}</SVGElement
				>{:else}<SVGElement
					__tag={component}
					{...astNode.properties}
				/>{/if}{:else if Array.isArray(astNode.children) && astNode.children.length !== 0}<svelte:element
				this={component}
				{...astNode.properties}
				>{#each astNode.children as child}<svelte:self
						astNode={child}
					/>{/each}</svelte:element
			>{:else}<svelte:element
				this={component}
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
