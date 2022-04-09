<script lang="ts">
	import { classNameTransform } from '../../utils';
	import type { Node } from '$lib/types';
	import Children from '../Children.svelte';
	export let children: Node[];
	export let properties: Record<string, unknown>;
</script>

<h5 {...classNameTransform(properties)}><Children {children} /></h5>
