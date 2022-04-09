# Override component

If you want to change styles, you can override components.

## Copy button for code block

Let's make custom plugin!

You can override per tag.

_Pre.svelte_

```svelte
<script lang="ts">
	import { classNameTransform } from 'svelte-exmarkdown/utils';
	import type { Node } from 'svelte-exmarkdown/types';
	import Children from 'svelte-exmarkdown/renderer/Children.svelte';
	export let children: Node[];
	export let properties: Record<string, unknown>;
	const copy = () => window.navigator.clipboard.writeText(children[0]['children'][0].value);
</script>

<div>
	<button on:click={copy}>copy!</button>
	<pre {...classNameTransform(properties)}><Children {children} /></pre>
</div>

<style>
	div {
		position: relative;
	}
	button {
		position: absolute;
		top: 0;
		right: 0;
	}
</style>
```

_App.svelte_

```svelte
<script>
	import Markdown from 'svelte-exmarkdown';
	import Pre from './Pre.svelte';
	export let md;
	/** @type {import('svelte-exmarkdown').Plugin[]} */
	const plugins = [{ renderer: { pre: Pre } }];
</script>

<Markdown {md} {plugins} />
```
