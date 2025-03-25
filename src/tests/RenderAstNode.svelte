<script lang="ts">
	import { getAstNode } from '../lib/contexts.svelte';
	const ast = getAstNode();
</script>

<output>{JSON.stringify(ast.current)}</output>
