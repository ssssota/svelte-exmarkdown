<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown from '$lib';
	import 'katex/dist/katex.min.css';
	import rehypeKatex from 'rehype-katex';
	import remarkMath from 'remark-math';

	let md = $state('$$\n\\sqrt{2}\n$$');
	const plugins: Plugin[] = [
		{ remarkPlugin: [remarkMath], rehypePlugin: [rehypeKatex] }
	];
</script>

<textarea bind:value={md}></textarea>
<Markdown {md} {plugins} />
