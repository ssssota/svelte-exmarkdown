<script lang="ts">
	import Mermaid from 'mermaid/dist/mermaid.esm.min.mjs';
	import { onMount } from 'svelte';
	export let code = '';
	const render = (code: string): string => {
		try {
			return Mermaid.render('id', code);
		} catch (e) {
			console.warn(e);
			return '';
		}
	};

	let svg: string;
	$: svg = render(code);
	onMount(() => {
		svg = render(code);
	});
</script>

{@html svg}
