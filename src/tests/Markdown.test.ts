import { cleanup, render, screen } from '@testing-library/svelte/svelte5';
import rehypeRaw from 'rehype-raw';
import { afterEach, describe, expect, it } from 'vitest';
import Markdown from '../lib/Markdown.svelte';

describe('Markdown(CommonMark)', () => {
	afterEach(() => cleanup());

	it('should render headings', async () => {
		let el: HTMLElement;
		const ctx = render(Markdown, { md: '# test1' });
		el = screen.getByRole('heading', { level: 1 });
		expect(el.textContent).toBe('test1');
		expect(el.outerHTML).toMatchInlineSnapshot(
			`"<h1><!----><!----><!----><!---->test1</h1>"`
		);

		await ctx.rerender({ md: '## test2' });
		el = screen.getByRole('heading', { level: 2 });
		expect(el.textContent).toBe('test2');
		expect(el.outerHTML).toMatchInlineSnapshot(
			`"<h2><!----><!----><!----><!---->test2</h2>"`
		);

		await ctx.rerender({ md: '### test3' });
		el = screen.getByRole('heading', { level: 3 });
		expect(el.textContent).toBe('test3');
		expect(el.outerHTML).toMatchInlineSnapshot(
			`"<h3><!----><!----><!----><!---->test3</h3>"`
		);

		await ctx.rerender({ md: '#### test4' });
		el = screen.getByRole('heading', { level: 4 });
		expect(el.textContent).toBe('test4');
		expect(el.outerHTML).toMatchInlineSnapshot(
			`"<h4><!----><!----><!----><!---->test4</h4>"`
		);

		await ctx.rerender({ md: '##### test5' });
		el = screen.getByRole('heading', { level: 5 });
		expect(el.textContent).toBe('test5');
		expect(el.outerHTML).toMatchInlineSnapshot(
			`"<h5><!----><!----><!----><!---->test5</h5>"`
		);

		await ctx.rerender({ md: '###### test6' });
		el = screen.getByRole('heading', { level: 6 });
		expect(el.textContent).toBe('test6');
		expect(el.outerHTML).toMatchInlineSnapshot(
			`"<h6><!----><!----><!----><!---->test6</h6>"`
		);

		// alt syntax
		await ctx.rerender({ md: 'test1\n====' });
		el = screen.getByRole('heading', { level: 1 });
		expect(el.textContent).toBe('test1');
		expect(el.outerHTML).toMatchInlineSnapshot(
			`"<h1><!----><!----><!----><!---->test1</h1>"`
		);

		await ctx.rerender({ md: 'test2\n----' });
		el = screen.getByRole('heading', { level: 2 });
		expect(el.textContent).toBe('test2');
		expect(el.outerHTML).toMatchInlineSnapshot(
			`"<h2><!----><!----><!----><!---->test2</h2>"`
		);
	});

	it('should render paragraph', async () => {
		let el: HTMLElement;
		const ctx = render(Markdown, { md: 'para1' });
		el = screen.getByText('para1');
		expect(el.tagName.toLowerCase()).toBe('p');
		expect(el.outerHTML).toMatchInlineSnapshot(
			`"<p><!----><!----><!----><!---->para1</p>"`
		);

		await ctx.rerender({ md: 'hello\nworld' });
		el = screen.getByText('hello world');
		expect(el.tagName.toLowerCase()).toBe('p');
		expect(el.outerHTML).toMatchInlineSnapshot(`
			"<p><!----><!----><!----><!---->hello
			world</p>"
		`);

		// multi paragraph
		await ctx.rerender({ md: 'hello\n\nworld' });
		el = screen.getByText('hello');
		expect(el.tagName.toLowerCase()).toBe('p');
		el = screen.getByText('world');
		expect(el.tagName.toLowerCase()).toBe('p');
		expect(el.parentElement?.innerHTML).toMatchInlineSnapshot(`
			"<!----><!----><!----><!----><!----><!----><!----><!----><p><!----><!----><!----><!---->hello</p><!----><!----><!---->
			<!----><!----><!----><!----><!----><!----><p><!----><!----><!----><!---->world</p>"
		`);
	});

	it('should render strong/bold', () => {
		let el: HTMLElement;
		render(Markdown, { md: 'test **bold1** test __bold2__' });
		el = screen.getByText('bold1');
		expect(el.tagName.toLowerCase()).toBe('strong');
		el = screen.getByText('bold2');
		expect(el.tagName.toLowerCase()).toBe('strong');
		expect(el.parentElement?.innerHTML).toMatchInlineSnapshot(
			`"<!----><!----><!----><!---->test <!----><!----><!----><!----><!----><!----><strong><!----><!----><!----><!---->bold1</strong><!----><!----><!----> test <!----><!----><!----><!----><!----><!----><strong><!----><!----><!----><!---->bold2</strong>"`
		);
	});

	it('should render emphasis/italic', () => {
		let el: HTMLElement;
		render(Markdown, { md: 'test *italic1* test _italic2_' });
		el = screen.getByText('italic1');
		expect(el.tagName.toLowerCase()).toBe('em');
		el = screen.getByText('italic2');
		expect(el.tagName.toLowerCase()).toBe('em');
		expect(el.parentElement?.innerHTML).toMatchInlineSnapshot(
			`"<!----><!----><!----><!---->test <!----><!----><!----><!----><!----><!----><em><!----><!----><!----><!---->italic1</em><!----><!----><!----> test <!----><!----><!----><!----><!----><!----><em><!----><!----><!----><!---->italic2</em>"`
		);
	});

	it('should render anchor/link', async () => {
		let el: HTMLElement;
		const ctx = render(Markdown, {
			md: 'test [link](https://ssssota.github.io/)'
		});
		el = screen.getByRole('link');
		expect((el as HTMLAnchorElement).href).toBe('https://ssssota.github.io/');
		expect(el.textContent).toBe('link');
		expect(el.parentElement?.innerHTML).toMatchInlineSnapshot(
			`"<!----><!----><!----><!---->test <!----><!----><!----><!----><!----><!----><a href="https://ssssota.github.io/"><!----><!----><!----><!---->link</a>"`
		);

		await ctx.rerender({
			md: 'test [link](https://ssssota.github.io "title")'
		});
		el = screen.getByRole('link');
		expect(el.title).toBe('title');
		expect(el.parentElement?.innerHTML).toMatchInlineSnapshot(
			`"<!----><!----><!----><!---->test <!----><!----><!----><!----><!----><!----><a href="https://ssssota.github.io" title="title"><!----><!----><!----><!---->link</a>"`
		);
	});

	it('should render inline code', () => {
		render(Markdown, { md: 'test `code`' });
		const el = screen.getByText('code');
		expect(el.tagName.toLowerCase()).toBe('code');
		expect(el.parentElement?.innerHTML).toMatchInlineSnapshot(
			`"<!----><!----><!----><!---->test <!----><!----><!----><!----><!----><!----><code><!----><!----><!----><!---->code</code>"`
		);
	});

	it('should render code block', async () => {
		let el: HTMLElement;
		const ctx = render(Markdown, {
			md: '```\nconst square = (x: number) => {\n  return x * x;\n};\n```'
		});
		el = ctx.container.querySelector('code') as HTMLElement;
		expect(el.tagName.toLowerCase()).toBe('code');
		expect(el.parentElement?.tagName.toLowerCase()).toBe('pre');
		expect(el.parentElement?.outerHTML).toMatchInlineSnapshot(`
			"<pre><!----><!----><!----><!----><!----><!----><!----><code><!----><!----><!----><!---->const square = (x: number) =&gt; {
			  return x * x;
			};
			</code></pre>"
		`);

		await ctx.rerender({ md: '```js\nconst val = 1;\n```' });
		el = screen.getByText('const val = 1;');
		expect(el.className).toBe('language-js');
		expect(el.parentElement?.outerHTML).toMatchInlineSnapshot(`
			"<pre><!----><!----><!----><!----><!----><!----><!----><code class="language-js"><!----><!----><!----><!---->const val = 1;
			</code></pre>"
		`);

		await ctx.rerender({ md: '~~~js\nconst val = `2`;\n~~~' });
		el = screen.getByText('const val = `2`;');
		expect(el.className).toBe('language-js');
		expect(el.parentElement?.outerHTML).toMatchInlineSnapshot(`
			"<pre><!----><!----><!----><!----><!----><!----><!----><code class="language-js"><!----><!----><!----><!---->const val = \`2\`;
			</code></pre>"
		`);
	});

	it('should render blockquote', async () => {
		const ctx = render(Markdown, { md: '> test' });
		const p1 = screen.getByText('test');
		expect(p1.tagName.toLowerCase()).toBe('p');
		expect(p1.parentElement?.tagName.toLowerCase()).toBe('blockquote');
		expect(p1.parentElement?.outerHTML).toMatchInlineSnapshot(`
			"<blockquote><!----><!----><!----><!---->
			<!----><!----><!----><!----><!----><!----><p><!----><!----><!----><!---->test</p><!----><!----><!---->
			</blockquote>"
		`);

		await ctx.rerender({ md: '> top\n> > nested' });
		const p2 = screen.getByText('top');
		const p3 = screen.getByText('nested');
		expect(p3.parentElement?.tagName.toLowerCase()).toBe('blockquote');
		expect(p3.parentElement?.parentElement).toBe(p2.parentElement);
		expect(p2.parentElement?.outerHTML).toMatchInlineSnapshot(`
			"<blockquote><!----><!----><!----><!---->
			<!----><!----><!----><!----><!----><!----><p><!----><!----><!----><!---->top</p><!----><!----><!---->
			<!----><!----><!----><!----><!----><!----><blockquote><!----><!----><!----><!---->
			<!----><!----><!----><!----><!----><!----><p><!----><!----><!----><!---->nested</p><!----><!----><!---->
			</blockquote><!----><!----><!---->
			</blockquote>"
		`);
	});

	it('should render unordered list', async () => {
		const ctx = render(Markdown, { md: '- item1' });
		const li1 = screen.getByText('item1');
		expect(li1.tagName.toLowerCase()).toBe('li');
		expect(li1.parentElement?.tagName.toLowerCase()).toBe('ul');

		await ctx.rerender({ md: '- item1\n- item2' });
		const li2 = screen.getByText('item1');
		const li3 = screen.getByText('item2');
		expect(li2.tagName.toLowerCase()).toBe('li');
		expect(li3.tagName.toLowerCase()).toBe('li');
		expect(li2.parentElement).toBe(li3.parentElement);

		await ctx.rerender({ md: '- item1\n  - nested\n- item2' });
		const li4 = screen.getByText('item1');
		const li5 = screen.getByText('nested');
		const li6 = screen.getByText('item2');
		expect(li5.parentElement?.parentElement).toBe(li4);
		expect(li5.parentElement?.parentElement?.parentElement).toBe(
			li6.parentElement
		);
	});

	it('should render ordered list', async () => {
		const ctx = render(Markdown, { md: '1. item1' });
		const li1 = screen.getByText('item1');
		expect(li1.tagName.toLowerCase()).toBe('li');
		expect(li1.parentElement?.tagName.toLowerCase()).toBe('ol');

		await ctx.rerender({ md: '1. item1\n2. item2' });
		const li2 = screen.getByText('item1');
		const li3 = screen.getByText('item2');
		expect(li2.tagName.toLowerCase()).toBe('li');
		expect(li3.tagName.toLowerCase()).toBe('li');
		expect(li2.parentElement).toBe(li3.parentElement);

		await ctx.rerender({ md: '2. item1\n    1. nested\n1. item2' });
		const li4 = screen.getByText('item1');
		const li5 = screen.getByText('nested');
		const li6 = screen.getByText('item2');
		expect((li4.parentElement as HTMLOListElement).start).toBe(2);
		expect(li5.parentElement?.parentElement).toBe(li4);
		expect(li5.parentElement?.parentElement?.parentElement).toBe(
			li6.parentElement
		);
	});

	it('should render themantic break', async () => {
		const ctx = render(Markdown, { md: '----------' });
		expect(ctx.container.innerHTML).toMatchInlineSnapshot(
			`"<!----><!----><!----><!----><!----><!----><!----><!----><hr>"`
		);

		await ctx.rerender({ md: '***\n---\n___' });
		expect(ctx.container.innerHTML).toMatchInlineSnapshot(`
			"<!----><!----><!----><!----><!----><!----><!----><!----><hr><!----><!----><!---->
			<!----><!----><!----><!----><!----><!----><hr><!----><!----><!---->
			<!----><!----><!----><!----><!----><!----><hr>"
		`);
	});

	it('should render image', async () => {
		let el: HTMLImageElement;
		const ctx = render(Markdown, { md: '![]()' });
		el = screen.getByAltText('') as HTMLImageElement;
		expect(el.outerHTML).toMatchInlineSnapshot(`"<img src="" alt="">"`);

		await ctx.rerender({ md: '![](http://example.com)' });
		el = screen.getByAltText('') as HTMLImageElement;
		expect(el.outerHTML).toMatchInlineSnapshot(
			`"<img src="http://example.com" alt="">"`
		);

		await ctx.rerender({ md: '![test](http://example.com)' });
		el = screen.getByAltText('test') as HTMLImageElement;
		expect(el.outerHTML).toMatchInlineSnapshot(
			`"<img src="http://example.com" alt="test">"`
		);

		await ctx.rerender({ md: '![test](http://example.com "This is test")' });
		el = screen.getByAltText('test') as HTMLImageElement;
		expect(el.outerHTML).toMatchInlineSnapshot(
			`"<img src="http://example.com" alt="test" title="This is test">"`
		);
	});
});

describe('HTML', () => {
	afterEach(() => cleanup());

	it('should not render raw tag', () => {
		const { container } = render(Markdown, { md: 'a<br>b' });
		expect(container.innerHTML.includes('<br>')).toBe(false);
	});
	it('should render raw tag if rehype-raw is used', () => {
		const { container } = render(Markdown, {
			md: 'a<br>b',
			plugins: [{ rehypePlugin: rehypeRaw }]
		});
		expect(container.innerHTML.includes('<br>')).toBe(true);
		expect(container.innerHTML).toMatchInlineSnapshot(
			`"<!----><!----><!----><!----><!----><!----><!----><!----><p><!----><!----><!----><!---->a<!----><!----><!----><!----><!----><!----><br><!----><!----><!---->b</p>"`
		);
	});
});

describe('SVG', () => {
	afterEach(() => cleanup());

	it('should render ElementSVG if svg is used', () => {
		const { container } = render(Markdown, {
			md: '<svg xmlns="http://www.w3.org/2000/svg"></svg>',
			plugins: [{ rehypePlugin: rehypeRaw }]
		});
		expect(container.innerHTML).toMatchInlineSnapshot(
			`"<!----><!----><!----><!----><!----><!----><!----><!----><p><!----><!----><!----><!----><!----><!----><!----><svg xmlns="http://www.w3.org/2000/svg"><!----></svg></p>"`
		);
	});

	it('should render ElementSVG if path is used', () => {
		const { container } = render(Markdown, {
			md: '<path d="M1"></path>',
			plugins: [{ rehypePlugin: rehypeRaw }]
		});
		expect(container.innerHTML).toMatchInlineSnapshot(
			`"<!----><!----><!----><!----><!----><!----><!----><!----><p><!----><!----><!----><!----><!----><!----><!----><path d="M1"><!----></path></p>"`
		);
	});
});
