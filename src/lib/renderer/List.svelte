<script lang="ts">
	import Children from './Children.svelte';
	import type { Node } from '../types';
	export let ordered = false;
	export let start: number | null = null;
	export let spread = false;
	export let children: Node[];
</script>

{#if ordered}
	<ol {start}>
		<Children {children} />
	</ol>
{:else}
	<ul>
		<Children {children} />
	</ul>
{/if}
