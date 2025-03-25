<script lang="ts">
	import { getAstNode } from '$lib';

	const astContext = getAstNode();
</script>

<!-- Dump current node -->
<pre>{JSON.stringify(astContext.current, null, 2)}</pre>
