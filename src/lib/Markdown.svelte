<script lang="ts">
	import { ref, setComponentsContext } from './contexts.svelte';
	import Renderer from './Renderer.svelte';
	import type { ComponentsMap, HastNode, Parser, Plugin } from './types';
	import { createParser, getComponentsFromPlugins } from './utils';

	type Props = {
		md: string;
		plugins?: Plugin[];
	};
	let { md, plugins = [] }: Props = $props();

	let parse = $derived<Parser>(createParser(plugins));

	const componentsContextValue = ref<ComponentsMap>({});
	$effect(() => {
		componentsContextValue.current = getComponentsFromPlugins(plugins);
	});
	setComponentsContext(componentsContextValue);

	let result = $derived<HastNode>(parse(md) as HastNode);
</script>

<Renderer astNode={result} />
