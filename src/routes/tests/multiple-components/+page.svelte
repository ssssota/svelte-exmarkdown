<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown from '$lib';
	import Image from './Image.svelte';

	const skipImagePlugin: Plugin = {
		renderer: { img: null }
	};
	const customImagePlugin: Plugin = {
		renderer: { img: Image }
	};
	let md = '';
</script>

<textarea bind:value={md}></textarea>
<Markdown {md} />
<Markdown {md} plugins={[skipImagePlugin]} />
<Markdown {md} plugins={[customImagePlugin]} />
