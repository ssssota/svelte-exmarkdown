<script lang="ts">
	import Children from './Children.svelte';
	import type { Node } from '../types';
	export let title: string | null = null;
	export let url: string;
	export let children: Node[];
</script>

<a href={url} {title}>
	<Children {children} />
</a>
