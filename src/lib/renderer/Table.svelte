<script lang="ts">
	import Children from './Children.svelte';
	import type { Node } from '../types';
	import { getComponentsContext } from '$lib/contexts';
	export let align: ('left' | 'right' | null)[];
	export let children: Node[];

	const components = getComponentsContext();
</script>

{@debug $components}
{@debug children}
<table>
	<Children {children} />
</table>
