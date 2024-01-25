<svelte:options runes={false} />

<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown, { Transparent } from '$lib';
	let md = 'This example is not support **strong** and *em* syntax.';
	const plugins: Plugin[] = [
		{ renderer: { strong: Transparent, em: Transparent } }
	];
</script>

<textarea bind:value={md} />
<Markdown {md} {plugins} />
