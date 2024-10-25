<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown from '$lib';
	import rehypeShikiFromHighlighter from '@shikijs/rehype/core';
	import { createHighlighterCoreSync } from 'shiki/core';
	import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
	import ts from 'shiki/langs/typescript.mjs';
	import github from 'shiki/themes/github-light.mjs';

	let md = $state("```typescript\nconsole.log('Hello, world!');\n```");

	const shikiPlugin = {
		rehypePlugin: [
			rehypeShikiFromHighlighter,
			createHighlighterCoreSync({
				themes: [github],
				langs: [ts],
				engine: createJavaScriptRegexEngine()
			}),
			{ theme: 'github-light' }
		]
	} satisfies Plugin;
	const plugins: Plugin[] = [shikiPlugin];
</script>

<textarea bind:value={md}></textarea>

<Markdown {md} {plugins} />
