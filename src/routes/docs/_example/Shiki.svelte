<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown from '$lib';
	import rehypeShikiFromHighlighter from '@shikijs/rehype/core';
	import { createHighlighterCore } from 'shiki/core';

	let md = $state("```typescript\nconsole.log('Hello, world!');\n```");

	const otherPlugins: Plugin[] = [
		// some plugins...
	];
	const shikiPluginPromise = createHighlighterCore({
		themes: [import('shiki/themes/vitesse-light.mjs')],
		langs: [import('shiki/langs/typescript.mjs')],
		loadWasm: import('shiki/wasm')
	}).then((highlighter): Plugin => {
		return {
			rehypePlugin: [
				rehypeShikiFromHighlighter,
				highlighter,
				{ theme: 'vitesse-light' }
			]
		};
	});
</script>

<textarea bind:value={md}></textarea>

{#await shikiPluginPromise}
	<Markdown {md} plugins={otherPlugins} />
{:then shikiPlugin}
	<Markdown {md} plugins={[shikiPlugin, ...otherPlugins]} />
{:catch}
	<Markdown {md} plugins={otherPlugins} />
{/await}
