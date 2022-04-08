<script lang="ts">
	import Renderer from '$lib/renderer/Renderer.svelte';
	import Children from '../renderer/Children.svelte';
	import type { Node } from '../types';
	export let align: ('left' | 'right' | null)[];
	export let children: Node[];

	let first: Node;
	let rest: Node[];
	$: [first, ...rest] = children;
</script>

<table>
	{#if first != null}
		<thead>
			<Renderer astNode={first} />
		</thead>
	{/if}
	{#if rest.length > 0}
		<tbody>
			<Children children={rest} />
		</tbody>
	{/if}
</table>
