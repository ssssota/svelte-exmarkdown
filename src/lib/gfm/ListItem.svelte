<script lang="ts">
	import Children from '../renderer/Children.svelte';
	import type { Node } from '../types';
	export let children: Node[];
	export let checked = false;
</script>

<li>
	<input type="checkbox" disabled {checked} />
	<Children {children} />
</li>

<style>
	li > :global(p) {
		display: inline;
	}
</style>
