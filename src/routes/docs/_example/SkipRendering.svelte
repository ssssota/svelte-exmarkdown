<svelte:options runes={false} />

<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown from '$lib';

	let md = '# Skipped\n\n## Rendered';
	const plugins: Plugin[] = [{ renderer: { h1: null } }];
</script>

<textarea bind:value={md} />
<Markdown {md} {plugins} />
