<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { ref, setComponentsContext } from './contexts.svelte';
	import Renderer from './Renderer.svelte';
	import type { ComponentsMap, HastNode, Parser, Plugin } from './types';
	import {
		createParser,
		getComponentsFromPlugins,
		snippetRenderer,
		type Tag
	} from './utils';

	type SnippetRenderers = {
		[T in Tag]?: T extends keyof SvelteHTMLElements
			? Snippet<[SvelteHTMLElements[T]]>
			: never;
	};
	type Props = SnippetRenderers & {
		md: string;
		plugins?: Plugin[];
	};
	let { md, plugins = [], ...snippetRenderers }: Props = $props();

	let snippetRenderersPlugin = $derived({
		renderer: Object.fromEntries(
			Object.entries(snippetRenderers)
				.map(([tag, renderer]) => {
					if (typeof renderer === 'string') return [tag, renderer];
					if (typeof renderer !== 'function') return undefined;
					return [tag, snippetRenderer(renderer)];
				})
				.filter((tuple) => tuple != null)
		)
	});

	let parse = $derived<Parser>(createParser(plugins));

	const componentsContextValue = ref<ComponentsMap>(
		// svelte-ignore state_referenced_locally
		getComponentsFromPlugins([...plugins, snippetRenderersPlugin])
	);
	$effect(() => {
		componentsContextValue.current = getComponentsFromPlugins([
			...plugins,
			snippetRenderersPlugin
		]);
	});
	setComponentsContext(componentsContextValue);

	let result = $derived<HastNode>(parse(md) as HastNode);
</script>

<Renderer astNode={result} />
