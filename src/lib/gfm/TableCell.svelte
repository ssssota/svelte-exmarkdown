<script lang="ts">
	import Children from '../renderer/Children.svelte';
	import type { Node } from '../types';
	export let children: Node[];
</script>

<td>
	<Children {children} />
</td>
