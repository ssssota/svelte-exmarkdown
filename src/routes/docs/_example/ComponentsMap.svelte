<svelte:options runes={false} />

<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown from '$lib';

	let md = '# h1 but rendered as h2\n\n## Same size with above';
	const plugins: Plugin[] = [{ renderer: { h1: 'h2' } }];
</script>

<textarea bind:value={md} />
<Markdown {md} {plugins} />
