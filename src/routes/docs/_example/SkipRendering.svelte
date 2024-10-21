<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown from '$lib';

	let md = $state('# Skipped\n\n## Rendered');
	const plugins: Plugin[] = [{ renderer: { h1: null } }];
</script>

<textarea bind:value={md}></textarea>
<Markdown {md} {plugins} />
