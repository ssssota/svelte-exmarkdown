<script lang="ts">
	import { setContext } from 'svelte';
	import { componentsContextKey, createComponentsContextValue } from './contexts';
	import Renderer, { defaultComponents } from './renderer';
	import type { Node, Plugin } from './types';
	import { createParser, nonNullable } from './utils';

	export let input: string;
	export let plugins: Plugin[] = [];
	let parse: (md: string) => Node;
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

	let result: Node;
	$: result = parse(input);
</script>

<Renderer astNode={result} />
