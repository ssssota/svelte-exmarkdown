<script lang="ts">
	import { getAstNode } from '../lib/contexts';
	const ast = getAstNode();
</script>

<output>{JSON.stringify($ast)}</output>
