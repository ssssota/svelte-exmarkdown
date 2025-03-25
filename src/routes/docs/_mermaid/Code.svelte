<script lang="ts">
	import { getAstNode } from '$lib/contexts.svelte';
	import mermaid from 'mermaid';
	let source: HTMLElement | null = $state(null);
	const ast = getAstNode();

	let { children, ...props } = $props();

	const isMermaid = $derived(
		typeof ast.current.properties?.class === 'string' &&
			ast.current.properties.class.split(/\s+/g).includes('language-mermaid')
	);
	$effect(() => {
		if (isMermaid && source) mermaid.run({ nodes: [source] });
	});
</script>

{#if isMermaid}
	{#key ast.current.children?.[0]?.value}
		<div {...props} bind:this={source}>
			{ast.current.children?.[0]?.value ?? ''}
		</div>
	{/key}
{:else}
	<code {...props}>
		{@render children()}
	</code>
{/if}
