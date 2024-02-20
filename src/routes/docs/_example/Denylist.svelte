<svelte:options runes={false} />

<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown, { denylist } from '$lib';

	let md = '# Skipped\n\n## Rendered';
	const plugins: Plugin[] = [denylist(['h1'])];
</script>

<textarea bind:value={md} />
<Markdown {md} {plugins} />
