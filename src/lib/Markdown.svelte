<script lang="ts">
	import {
		createComponentsContextValue,
		setComponentsContext
	} from './contexts';
	import Renderer from './Renderer.svelte';
	import type { HastNode, Parser, Plugin } from './types';
	import { createParser, getComponentsFromPlugins } from './utils';

	type Props = {
		md: string;
		plugins?: Plugin[];
	};
	let { md, plugins = [] }: Props = $props();

	let parse = $derived<Parser>(createParser(plugins));

	const componentsContextValue = createComponentsContextValue(
		getComponentsFromPlugins(plugins)
	);
	$effect(() => {
		componentsContextValue.set(getComponentsFromPlugins(plugins));
	});
	setComponentsContext(componentsContextValue);

	let result = $derived<HastNode>(parse(md) as HastNode);
</script>

<Renderer astNode={result} />
