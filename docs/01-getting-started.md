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
	let md = '# Hello world!';
</script>

<textarea bind:value={md} />
<Markdown {md} />
```

with GFM(GitHub Flavored Markdown)

```svelte
<script>
	import Markdown from 'svelte-exmarkdown';
	import { gfmPlugin } from 'svelte-exmarkdown/gfm';
	let md = '# Hello world!';
</script>

<textarea bind:value={md} />
<Markdown {md} plugins={[gfmPlugin]} />
```
