<script lang="ts">
	import Mermaid from 'mermaid/dist/mermaid.esm.min.mjs';
	import { onMount } from 'svelte';
	import { hash } from './utils';
	export let code = '';
	const render = (code: string): string => {
		try {
			const id = 'mermaid-' + hash(code);
			return Mermaid.render(id, code);
		} catch (e) {
			console.warn(e);
			return `<pre><code>${code}</code></pre>`;
		}
	};

	let svg: string;
	$: svg = render(code);
	onMount(() => {
		svg = render(code);
	});
</script>

<div>
	{@html svg}
</div>
