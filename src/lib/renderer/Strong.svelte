<script lang="ts">
	import Children from './Children.svelte';
	import type { Node } from '../types';
	export let children: Node[];
</script>

<strong>
	<Children {children} />
</strong>
