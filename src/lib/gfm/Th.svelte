<script lang="ts">
	import type { Node } from '$lib/types';
	import Children from '../renderer/Children.svelte';
	export let children: Node[];
	export let properties: Record<string, unknown>;
</script>

<th {...properties}><Children {children} /></th>
