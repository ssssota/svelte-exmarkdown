# Getting started

## Install

```sh
npm install svelte-exmarkdown
# yarn add svelte-exmarkdown
# pnpm add svelte-exmarkdown
```

## Basic usage

```svelte
<script>
	import Markdown from 'svelte-exmarkdown';
	let md = $state('# Hello world!');
</script>

<textarea bind:value={md}></textarea>
<Markdown {md} />
```

with GFM(GitHub Flavored Markdown)

If you want to use tables, checkboxes, etc., you can use the GFM plugin.

```svelte
<script>
	import Markdown from 'svelte-exmarkdown';
	import { gfmPlugin } from 'svelte-exmarkdown/gfm';
	let md = $state('# Hello world!');
	const plugins = [gfmPlugin()];
</script>

<textarea bind:value={md}></textarea>
<Markdown {md} {plugins} />
```
