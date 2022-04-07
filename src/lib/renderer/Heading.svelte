<script lang="ts">
	import type { Node } from './types';
	import Children from './Children.svelte';

	export let depth: number;
	export let children: Node[];
</script>

{#if depth === 1}
	<h1><Children {children} /></h1>
{:else if depth === 2}
	<h2><Children {children} /></h2>
{:else if depth === 3}
	<h3><Children {children} /></h3>
{:else if depth === 4}
	<h4><Children {children} /></h4>
{:else if depth === 5}
	<h5><Children {children} /></h5>
{:else if depth === 6}
	<h6><Children {children} /></h6>
{:else}
	<p><Children {children} /></p>
{/if}
