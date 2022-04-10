<script lang="ts">
	import { setContext } from 'svelte';
	import { componentsContextKey, createComponentsContextValue } from './contexts';
	import Renderer, { defaultComponents } from './renderer';
	import type { Parser, Plugin, HastNode } from './types';
	import { createParser, nonNullable } from './utils';

	export let md: string;
	export let plugins: Plugin[] = [];
	let parse: Parser;
	$: parse = createParser(plugins);

	const componentsContextValue = createComponentsContextValue({});
	$: componentsContextValue.set({
		...defaultComponents,
		...plugins
			.map((plugin) => plugin.renderer)
			.filter(nonNullable)
			.reduce((acc, cur) => ({ ...acc, ...cur }), {})
	});
	setContext(componentsContextKey, componentsContextValue);

	let result: HastNode;
	$: result = parse(md) as HastNode;
</script>

<Renderer astNode={result} />
