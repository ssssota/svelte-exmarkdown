<script lang="ts">
	import type { Node } from '$lib/types';
	import Children from '../renderer/Children.svelte';
	export let children: Node[];
	export let properties: Record<string, unknown>;
</script>

<td {...properties} style:text-align={typeof properties.align === 'string' ? properties.align : ''}>
	<Children {children} />
</td>
