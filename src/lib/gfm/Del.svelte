<script lang="ts">
	import Children from '../renderer/Children.svelte';
	import type { Node } from '../types';
	export let children: Node[];
</script>

<del>
	<Children {children} />
</del>
