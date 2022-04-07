<script lang="ts">
	import remarkParse from 'remark-parse';
	import { setContext } from 'svelte';
	import { unified } from 'unified';
	import { componentsContextKey, createComponentsContextValue } from './contexts';
	import Renderer, { defaultComponents } from './renderer';
	import type { Plugin } from './types';
	import { nonNullable } from './utils';

	export let input: string;
	export let plugins: Plugin[] = [];
	const parse = unified()
		.use(remarkParse)
		.use(plugins.map((plugin) => plugin.remarkPlugin).filter(nonNullable)).parse;

	const componentsContextValue = createComponentsContextValue({});
	$: componentsContextValue.set({
		...defaultComponents,
		...plugins
			.map((plugin) => plugin.renderer)
			.filter(nonNullable)
			.reduce((acc, cur) => ({ ...acc, ...cur }), {})
	});
	$: setContext(componentsContextKey, componentsContextValue);

	let result = parse(input);
	$: result = parse(input);
</script>

<div {...$$props}>
	<Renderer astNode={result} />
</div>

<pre>{JSON.stringify(result, null, '  ')}</pre>
