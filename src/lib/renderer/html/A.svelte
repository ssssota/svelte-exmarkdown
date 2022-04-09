<script lang="ts">
	import type { Node } from '$lib/types';
	import Children from '../Children.svelte';
	export let children: Node[];
	export let properties: Record<string, unknown>;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a {...properties}><Children {children} /></a>
