<script lang="ts">
	import { getComponentsContext } from '$lib/contexts';
	import type { Node } from './types';
	export let astNode: Node;
	export let __index = 0;

	let components = getComponentsContext();
</script>

<svelte:component this={$components[astNode.type]} {...astNode} {__index} />
