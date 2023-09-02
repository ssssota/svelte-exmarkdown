# Access to the AST

You can access the AST in the your custom component by using the `getAstNode` function.

It makes powerful to create custom components.

```svelte
<!-- DumpAst.svelte -->
<script lang="ts">
	import { getAstNode } from 'svelte-exmarkdown';

	const astContext = getAstNode();
</script>

<!-- Dump current node --><pre>{JSON.stringify($astContext, null, 2)}</pre>
```

:ast
