<script lang="ts">
	import type { HastNode } from '$lib/types';
	import Children from '../lib/renderer/Children.svelte';
	import Mermaid from './Mermaid.svelte';
	export let children: HastNode[];
	export let properties: Record<string, unknown>;
	let child: HastNode;
	$: child = children[0];
	let code: string;
	$: code =
		child.type === 'element' && child.children[0]?.type === 'text' ? child.children[0].value : '';
</script>

{#if child.type === 'element' && Array.isArray(child.properties?.className) && child.properties?.className?.includes('language-mermaid')}
	<Mermaid {code} />
{:else}
	<pre {...properties}><Children {children} /></pre>
{/if}
