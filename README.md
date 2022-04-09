# svelte-exmarkdown

Svelte component to render markdown.

## Motivation

[svelte-markdown](https://www.npmjs.com/package/svelte-markdown) is a good component package.
However, it is not extensible. You cannot use custom syntax(e.g. KaTeX).

[MDsveX](https://www.npmjs.com/package/mdsvex) is another good package.
However, it is a preprocessor. Not suitable for dynamic rendering.

We need **pluggable** and **dynamic** markdown renderer in svelte like [react-markdown](https://www.npmjs.com/package/react-markdown).

## Usage

```svelte
<script>
	import Markdown from 'svelte-exmarkdown';
	let md = '# Hello world!';
</script>

<textarea bind:value={md} />
<Markdown {md} />
```

with GFM

```svelte
<script>
	import Markdown from 'svelte-exmarkdown';
	import { gfmPlugin } from 'svelte-exmarkdown/gfm';
	let md = '# Hello world!';
</script>

<textarea bind:value={md} />
<Markdown {md} plugins={[gfmPlugin]} />
```

## Playground & Documents

https://ssssota.github.io/svelte-exmarkdown
