<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown, { allowlist } from '$lib';

	let md = $state(
		'# Skipped\n\nOnly paragraph, *em*, **strong** and [link](https://example.com) are rendered'
	);
	const plugins: Plugin[] = [allowlist(['p', 'em', 'strong', 'a'])];
</script>

<textarea bind:value={md}></textarea>
<Markdown {md} {plugins} />
