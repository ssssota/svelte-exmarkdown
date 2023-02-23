<script lang="ts">
	import type { HastNode } from '../types';
	import Renderer from './Renderer.svelte';

	export let children: HastNode[];

	export let type: unknown = undefined;
	export let position: unknown = undefined;
	export let __index: unknown = undefined;
	// HACK: ignore `unused-export-let`
	type && position && __index;
</script>

{#each children as child, __index}
	<Renderer astNode={child} {__index} />
{/each}
