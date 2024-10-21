<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown, { Transparent } from '$lib';
	let md = $state('This example is not support **strong** and *em* syntax.');
	const plugins: Plugin[] = [
		{ renderer: { strong: Transparent, em: Transparent } }
	];
</script>

<textarea bind:value={md}></textarea>
<Markdown {md} {plugins} />
