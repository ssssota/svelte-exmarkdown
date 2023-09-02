<script lang="ts">
	import type { Plugin } from '$lib';
	import Markdown from '$lib';
	import DumpAst from './DumpAst.svelte';

	let md = '# Hello World';
	const plugins: Plugin[] = [{ renderer: { h1: DumpAst } }];
</script>

<textarea bind:value={md} />
<Markdown {md} {plugins} />
