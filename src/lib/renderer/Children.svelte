<script lang="ts">
	import type { HastNode } from '../types';
	import Renderer from './Renderer.svelte';

	export let children: HastNode[];
</script>

{#each children as child, __index}
	<Renderer astNode={child} {__index} />
{/each}
