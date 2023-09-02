import { cleanup, render, screen } from '@testing-library/svelte';
import rehypeRaw from 'rehype-raw';
import { afterEach, describe, expect, it } from 'vitest';
import Markdown from '../lib/Markdown.svelte';

describe('Markdown(CommonMark)', () => {
	afterEach(() => cleanup());

	it('should render headings', () => {
		let el: HTMLElement;
		const ctx = render(Markdown, { md: '# test1' });
		el = screen.getByRole('heading', { level: 1 });
		expect(el.textContent).toBe('test1');
		expect(el.outerHTML).toMatchInlineSnapshot(
			'"<h1>test1<!--<Renderer>--></h1>"'
		);

		ctx.rerender({ md: '## test2' });
		el = screen.getByRole('heading', { level: 2 });
		expect(el.textContent).toBe('test2');
		expect(el.outerHTML).toMatchInlineSnapshot(
			'"<h2>test2<!--<Renderer>--></h2>"'
		);

		ctx.rerender({ md: '### test3' });
		el = screen.getByRole('heading', { level: 3 });
		expect(el.textContent).toBe('test3');
		expect(el.outerHTML).toMatchInlineSnapshot(
			'"<h3>test3<!--<Renderer>--></h3>"'
		);

		ctx.rerender({ md: '#### test4' });
		el = screen.getByRole('heading', { level: 4 });
		expect(el.textContent).toBe('test4');
		expect(el.outerHTML).toMatchInlineSnapshot(
			'"<h4>test4<!--<Renderer>--></h4>"'
		);

		ctx.rerender({ md: '##### test5' });
		el = screen.getByRole('heading', { level: 5 });
		expect(el.textContent).toBe('test5');
		expect(el.outerHTML).toMatchInlineSnapshot(
			'"<h5>test5<!--<Renderer>--></h5>"'
		);

		ctx.rerender({ md: '###### test6' });
		el = screen.getByRole('heading', { level: 6 });
		expect(el.textContent).toBe('test6');
		expect(el.outerHTML).toMatchInlineSnapshot(
			'"<h6>test6<!--<Renderer>--></h6>"'
		);

		// alt syntax
		ctx.rerender({ md: 'test1\n====' });
		el = screen.getByRole('heading', { level: 1 });
		expect(el.textContent).toBe('test1');
		expect(el.outerHTML).toMatchInlineSnapshot(
			'"<h1>test1<!--<Renderer>--></h1>"'
		);

		ctx.rerender({ md: 'test2\n----' });
		el = screen.getByRole('heading', { level: 2 });
		expect(el.textContent).toBe('test2');
		expect(el.outerHTML).toMatchInlineSnapshot(
			'"<h2>test2<!--<Renderer>--></h2>"'
		);
	});

	it('should render paragraph', () => {
		let el: HTMLElement;
		const ctx = render(Markdown, { md: 'para1' });
		el = screen.getByText('para1');
		expect(el.tagName.toLowerCase()).toBe('p');
		expect(el.outerHTML).toMatchInlineSnapshot(
			'"<p>para1<!--<Renderer>--></p>"'
		);

		ctx.rerender({ md: 'hello\nworld' });
		el = screen.getByText('hello world');
		expect(el.tagName.toLowerCase()).toBe('p');
		expect(el.outerHTML).toMatchInlineSnapshot(`
			"<p>hello
			world<!--<Renderer>--></p>"
		`);

		// multi paragraph
		ctx.rerender({ md: 'hello\n\nworld' });
		el = screen.getByText('hello');
		expect(el.tagName.toLowerCase()).toBe('p');
		el = screen.getByText('world');
		expect(el.tagName.toLowerCase()).toBe('p');
		expect(el.parentElement?.innerHTML).toMatchInlineSnapshot(`
			"<p>hello<!--<Renderer>--></p><!--<Renderer>-->
			<!--<Renderer>--><p>world<!--<Renderer>--></p><!--<Renderer>--><!--<Renderer>--><!--<Markdown>-->"
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
			'"test <!--<Renderer>--><strong>bold1<!--<Renderer>--></strong><!--<Renderer>--> test <!--<Renderer>--><strong>bold2<!--<Renderer>--></strong><!--<Renderer>-->"'
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
			'"test <!--<Renderer>--><em>italic1<!--<Renderer>--></em><!--<Renderer>--> test <!--<Renderer>--><em>italic2<!--<Renderer>--></em><!--<Renderer>-->"'
		);
	});

	it('should render anchor/link', () => {
		let el: HTMLElement;
		const ctx = render(Markdown, {
			md: 'test [link](https://ssssota.github.io/)'
		});
		el = screen.getByRole('link');
		expect((el as HTMLAnchorElement).href).toBe('https://ssssota.github.io/');
		expect(el.textContent).toBe('link');
		expect(el.parentElement?.innerHTML).toMatchInlineSnapshot(
			'"test <!--<Renderer>--><a href=\\"https://ssssota.github.io/\\">link<!--<Renderer>--></a><!--<Renderer>-->"'
		);

		ctx.rerender({ md: 'test [link](https://ssssota.github.io "title")' });
		el = screen.getByRole('link');
		expect(el.title).toBe('title');
		expect(el.parentElement?.innerHTML).toMatchInlineSnapshot(
			'"test <!--<Renderer>--><a href=\\"https://ssssota.github.io\\" title=\\"title\\">link<!--<Renderer>--></a><!--<Renderer>-->"'
		);
	});

	it('should render inline code', () => {
		render(Markdown, { md: 'test `code`' });
		const el = screen.getByText('code');
		expect(el.tagName.toLowerCase()).toBe('code');
		expect(el.parentElement?.innerHTML).toMatchInlineSnapshot(
			'"test <!--<Renderer>--><code>code<!--<Renderer>--></code><!--<Renderer>-->"'
		);
	});

	it('should render code block', () => {
		let el: HTMLElement;
		const ctx = render(Markdown, {
			md: '```\nconst square = (x: number) => {\n  return x * x;\n};\n```'
		});
		el = ctx.container.querySelector('code') as HTMLElement;
		expect(el.tagName.toLowerCase()).toBe('code');
		expect(el.parentElement?.tagName.toLowerCase()).toBe('pre');
		expect(el.parentElement?.outerHTML).toMatchInlineSnapshot(`
			"<pre><code>const square = (x: number) =&gt; {
			  return x * x;
			};
			<!--<Renderer>--></code><!--<Renderer>--></pre>"
		`);

		ctx.rerender({ md: '```js\nconst val = 1;\n```' });
		el = screen.getByText('const val = 1;');
		expect(el.className).toBe('language-js');
		expect(el.parentElement?.outerHTML).toMatchInlineSnapshot(`
			"<pre><code class=\\"language-js\\">const val = 1;
			<!--<Renderer>--></code><!--<Renderer>--></pre>"
		`);

		ctx.rerender({ md: '~~~js\nconst val = `2`;\n~~~' });
		el = screen.getByText('const val = `2`;');
		expect(el.className).toBe('language-js');
		expect(el.parentElement?.outerHTML).toMatchInlineSnapshot(`
			"<pre><code class=\\"language-js\\">const val = \`2\`;
			<!--<Renderer>--></code><!--<Renderer>--></pre>"
		`);
	});

	it('should render blockquote', () => {
		const ctx = render(Markdown, { md: '> test' });
		const p1 = screen.getByText('test');
		expect(p1.tagName.toLowerCase()).toBe('p');
		expect(p1.parentElement?.tagName.toLowerCase()).toBe('blockquote');
		expect(p1.parentElement?.outerHTML).toMatchInlineSnapshot(`
			"<blockquote>
			<!--<Renderer>--><p>test<!--<Renderer>--></p><!--<Renderer>-->
			<!--<Renderer>--></blockquote>"
		`);

		ctx.rerender({ md: '> top\n> > nested' });
		const p2 = screen.getByText('top');
		const p3 = screen.getByText('nested');
		expect(p3.parentElement?.tagName.toLowerCase()).toBe('blockquote');
		expect(p3.parentElement?.parentElement).toBe(p2.parentElement);
		expect(p2.parentElement?.outerHTML).toMatchInlineSnapshot(`
			"<blockquote>
			<!--<Renderer>--><p>top<!--<Renderer>--></p><!--<Renderer>-->
			<!--<Renderer>--><blockquote>
			<!--<Renderer>--><p>nested<!--<Renderer>--></p><!--<Renderer>-->
			<!--<Renderer>--></blockquote><!--<Renderer>-->
			<!--<Renderer>--></blockquote>"
		`);
	});

	it('should render unordered list', () => {
		const ctx = render(Markdown, { md: '- item1' });
		const li1 = screen.getByText('item1');
		expect(li1.tagName.toLowerCase()).toBe('li');
		expect(li1.parentElement?.tagName.toLowerCase()).toBe('ul');

		ctx.rerender({ md: '- item1\n- item2' });
		const li2 = screen.getByText('item1');
		const li3 = screen.getByText('item2');
		expect(li2.tagName.toLowerCase()).toBe('li');
		expect(li3.tagName.toLowerCase()).toBe('li');
		expect(li2.parentElement).toBe(li3.parentElement);

		ctx.rerender({ md: '- item1\n  - nested\n- item2' });
		const li4 = screen.getByText('item1');
		const li5 = screen.getByText('nested');
		const li6 = screen.getByText('item2');
		expect(li5.parentElement?.parentElement).toBe(li4);
		expect(li5.parentElement?.parentElement?.parentElement).toBe(
			li6.parentElement
		);
	});

	it('should render ordered list', () => {
		const ctx = render(Markdown, { md: '1. item1' });
		const li1 = screen.getByText('item1');
		expect(li1.tagName.toLowerCase()).toBe('li');
		expect(li1.parentElement?.tagName.toLowerCase()).toBe('ol');

		ctx.rerender({ md: '1. item1\n2. item2' });
		const li2 = screen.getByText('item1');
		const li3 = screen.getByText('item2');
		expect(li2.tagName.toLowerCase()).toBe('li');
		expect(li3.tagName.toLowerCase()).toBe('li');
		expect(li2.parentElement).toBe(li3.parentElement);

		ctx.rerender({ md: '2. item1\n    1. nested\n1. item2' });
		const li4 = screen.getByText('item1');
		const li5 = screen.getByText('nested');
		const li6 = screen.getByText('item2');
		expect((li4.parentElement as HTMLOListElement).start).toBe(2);
		expect(li5.parentElement?.parentElement).toBe(li4);
		expect(li5.parentElement?.parentElement?.parentElement).toBe(
			li6.parentElement
		);
	});

	it('should render themantic break', () => {
		const ctx = render(Markdown, { md: '----------' });
		expect(ctx.container.innerHTML).toMatchInlineSnapshot(
			'"<div><hr><!--<Renderer>--><!--<Renderer>--><!--<Markdown>--></div>"'
		);

		ctx.rerender({ md: '***\n---\n___' });
		expect(ctx.container.innerHTML).toMatchInlineSnapshot(`
			"<div><hr><!--<Renderer>-->
			<!--<Renderer>--><hr><!--<Renderer>-->
			<!--<Renderer>--><hr><!--<Renderer>--><!--<Renderer>--><!--<Markdown>--></div>"
		`);
	});

	it('should render image', () => {
		let el: HTMLImageElement;
		const ctx = render(Markdown, { md: '![]()' });
		el = screen.getByAltText('') as HTMLImageElement;
		expect(el.outerHTML).toMatchInlineSnapshot('"<img src=\\"\\" alt=\\"\\">"');

		ctx.rerender({ md: '![](http://example.com)' });
		el = screen.getByAltText('') as HTMLImageElement;
		expect(el.outerHTML).toMatchInlineSnapshot(
			'"<img src=\\"http://example.com\\" alt=\\"\\">"'
		);

		ctx.rerender({ md: '![test](http://example.com)' });
		el = screen.getByAltText('test') as HTMLImageElement;
		expect(el.outerHTML).toMatchInlineSnapshot(
			'"<img src=\\"http://example.com\\" alt=\\"test\\">"'
		);

		ctx.rerender({ md: '![test](http://example.com "This is test")' });
		el = screen.getByAltText('test') as HTMLImageElement;
		expect(el.outerHTML).toMatchInlineSnapshot(
			'"<img src=\\"http://example.com\\" alt=\\"test\\" title=\\"This is test\\">"'
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
			'"<div><p>a<!--<Renderer>--><br><!--<Renderer>-->b<!--<Renderer>--></p><!--<Renderer>--><!--<Renderer>--><!--<Markdown>--></div>"'
		);
	});
});
