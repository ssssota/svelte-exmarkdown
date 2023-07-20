<script lang="ts">
	import Mermaid from 'mermaid';
	import { onMount } from 'svelte';
	import { hash } from './utils';
	export let code = '';
	const render = (code: string): Promise<string> => {
		try {
			const id = 'mermaid-' + hash(code);
			return Mermaid.render(id, code).then((res) => res.svg);
		} catch (e) {
			console.warn(e);
			return Promise.resolve(`<pre><code>${code}</code></pre>`);
		}
	};

	let svgPromise: Promise<string>;
	$: svgPromise = render(code);
	onMount(() => {
		svgPromise = render(code);
	});
</script>

<div>
	{#await svgPromise}
		...
	{:then svg}
		<!-- eslint-disable svelte/no-at-html-tags -->
		{@html svg}
	{/await}
</div>
