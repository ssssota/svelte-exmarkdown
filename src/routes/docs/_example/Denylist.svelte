<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown, { denylist } from '$lib';

	let md = $state('# Skipped\n\n## Rendered');
	const plugins: Plugin[] = [denylist(['h1'])];
</script>

<textarea bind:value={md}></textarea>
<Markdown {md} {plugins} />
