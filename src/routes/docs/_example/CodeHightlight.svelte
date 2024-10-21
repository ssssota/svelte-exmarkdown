<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown from '$lib';
	import typescript from 'highlight.js/lib/languages/typescript';
	import 'highlight.js/styles/github.css';
	import rehypeHighlight from 'rehype-highlight';

	let md = $state("```typescript\nconsole.log('Hello, world!');\n```");
	const plugins: Plugin[] = [
		{
			rehypePlugin: [
				rehypeHighlight,
				{ ignoreMissing: true, languages: { typescript } }
			]
		}
	];
</script>

<textarea bind:value={md}></textarea>
<Markdown {md} {plugins} />
