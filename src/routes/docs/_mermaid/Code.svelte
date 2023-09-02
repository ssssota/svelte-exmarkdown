<script lang="ts">
	import { getAstNode } from '$lib/contexts';
	import mermaid from 'mermaid';
	let source: HTMLElement | null = null;
	const ast = getAstNode();

	let isMermaid = false;
	$: isMermaid =
		typeof $ast.properties?.class === 'string' &&
		$ast.properties.class.split(/\s+/g).includes('language-mermaid');
	$: if (isMermaid && source) mermaid.run({ nodes: [source] });
</script>

{#if isMermaid}
	{#key $ast.children?.[0]?.value}
		<div {...$$props} bind:this={source}>{$ast.children?.[0]?.value ?? ''}</div>
	{/key}
{:else}
	<code {...$$props}><slot /></code>
{/if}
