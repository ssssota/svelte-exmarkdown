<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown from '$lib';
	import rehypeRaw from 'rehype-raw';

	let md = "<div style='color: red;'>Hello, world!</div>";
	const plugins: Plugin[] = [{ rehypePlugin: [rehypeRaw] }];
</script>

<textarea bind:value={md}></textarea>
<Markdown {md} {plugins} />
