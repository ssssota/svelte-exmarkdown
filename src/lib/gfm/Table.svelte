<script lang="ts">
	import Children from '../renderer/Children.svelte';
	import type { Node } from '../types';
	export let align: ('left' | 'right' | null)[];
	export let children: Node[];
</script>

<table>
	<tbody>
		<Children {children} />
	</tbody>
</table>
