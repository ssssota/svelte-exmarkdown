<script lang="ts">
	import {
		createComponentsContextValue,
		setComponentsContext
	} from './contexts';
	import Renderer from './Renderer.svelte';
	import type { HastNode, Parser, Plugin } from './types';
	import { createParser, nonNullable } from './utils';

	export let md: string;
	export let plugins: Plugin[] = [];
	let parse: Parser;
	$: parse = createParser(plugins);

	const componentsContextValue = createComponentsContextValue({});
	$: componentsContextValue.set({
		...plugins
			.map((plugin) => plugin.renderer)
			.filter(nonNullable)
			.reduce((acc, cur) => ({ ...acc, ...cur }), {})
	});
	setComponentsContext(componentsContextValue);

	let result: HastNode;
	$: result = parse(md) as HastNode;
</script>

<Renderer astNode={result} />
