<script lang="ts">
	import { classNameTransform } from '../lib/utils';
	import type { Node } from '$lib/types';
	import Children from '../lib/renderer/Children.svelte';
	import Mermaid from './Mermaid.svelte';
	export let children: Node[];
	export let properties: Record<string, unknown>;
	let child: any;
	$: child = children[0];
	let code: string;
	$: code = child?.children?.[0]?.value;
</script>

{#if Array.isArray(child.properties.className) && child.properties.className.includes('language-mermaid')}
	<Mermaid {code} />
{:else}
	<pre {...classNameTransform(properties)}><Children {children} /></pre>
{/if}
