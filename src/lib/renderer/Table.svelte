<script lang="ts">
	import Children from './Children.svelte';
	import type { Node } from './types';
	export let align: ('left' | 'right' | null)[];
	export let children: Node[];
</script>

<table>
	<Children {children} />
</table>
