<script lang="ts">
	import type { Node } from '../types';
	import Renderer from './Renderer.svelte';

	export let children: Node[];
</script>

{#each children as child, __index}
	<Renderer astNode={child} {__index} />
{/each}
