import { cleanup, render, screen } from '@testing-library/svelte';
import rehypeRaw from 'rehype-raw';
import { afterEach, describe, expect, it } from 'vitest';
import Markdown from '../src/lib';

describe('Markdown(CommonMark)', () => {
	afterEach(() => cleanup());

	it('should render headings', () => {
		let el: HTMLElement;
		const ctx = render(Markdown, { md: '# test1' });
		el = screen.getByRole('heading', { level: 1 });
		expect(el.textContent).toBe('test1');
		expect(el.outerHTML).toMatchInlineSnapshot(
			'"<h1>test1<!--<Text>--><!--<Renderer>--><!--<Children>--></h1>"'
		);

		ctx.rerender({ md: '## test2' });
		el = screen.getByRole('heading', { level: 2 });
		expect(el.textContent).toBe('test2');
		expect(el.outerHTML).toMatchInlineSnapshot(
			'"<h2>test2<!--<Text>--><!--<Renderer>--><!--<Children>--></h2>"'
		);

		ctx.rerender({ md: '### test3' });
		el = screen.getByRole('heading', { level: 3 });
		expect(el.textContent).toBe('test3');
		expect(el.outerHTML).toMatchInlineSnapshot(
			'"<h3>test3<!--<Text>--><!--<Renderer>--><!--<Children>--></h3>"'
		);

		ctx.rerender({ md: '#### test4' });
		el = screen.getByRole('heading', { level: 4 });
		expect(el.textContent).toBe('test4');
		expect(el.outerHTML).toMatchInlineSnapshot(
			'"<h4>test4<!--<Text>--><!--<Renderer>--><!--<Children>--></h4>"'
		);

		ctx.rerender({ md: '##### test5' });
		el = screen.getByRole('heading', { level: 5 });
		expect(el.textContent).toBe('test5');
		expect(el.outerHTML).toMatchInlineSnapshot(
			'"<h5>test5<!--<Text>--><!--<Renderer>--><!--<Children>--></h5>"'
		);

		ctx.rerender({ md: '###### test6' });
		el = screen.getByRole('heading', { level: 6 });
		expect(el.textContent).toBe('test6');
		expect(el.outerHTML).toMatchInlineSnapshot(
			'"<h6>test6<!--<Text>--><!--<Renderer>--><!--<Children>--></h6>"'
		);

		// alt syntax
		ctx.rerender({ md: 'test1\n====' });
		el = screen.getByRole('heading', { level: 1 });
		expect(el.textContent).toBe('test1');
		expect(el.outerHTML).toMatchInlineSnapshot(
			'"<h1>test1<!--<Text>--><!--<Renderer>--><!--<Children>--></h1>"'
		);

		ctx.rerender({ md: 'test2\n----' });
		el = screen.getByRole('heading', { level: 2 });
		expect(el.textContent).toBe('test2');
		expect(el.outerHTML).toMatchInlineSnapshot(
			'"<h2>test2<!--<Text>--><!--<Renderer>--><!--<Children>--></h2>"'
		);
	});

	it('should render paragraph', () => {
		let el: HTMLElement;
		const ctx = render(Markdown, { md: 'para1' });
		el = screen.getByText('para1');
		expect(el.tagName.toLowerCase()).toBe('p');
		expect(el.outerHTML).toMatchInlineSnapshot(
			'"<p>para1<!--<Text>--><!--<Renderer>--><!--<Children>--></p>"'
		);

		ctx.rerender({ md: 'hello\nworld' });
		el = screen.getByText('hello world');
		expect(el.tagName.toLowerCase()).toBe('p');
		expect(el.outerHTML).toMatchInlineSnapshot(`
			"<p>hello
			world<!--<Text>--><!--<Renderer>--><!--<Children>--></p>"
		`);

		// multi paragraph
		ctx.rerender({ md: 'hello\n\nworld' });
		el = screen.getByText('hello');
		expect(el.tagName.toLowerCase()).toBe('p');
		el = screen.getByText('world');
		expect(el.tagName.toLowerCase()).toBe('p');
		expect(el.parentElement?.innerHTML).toMatchInlineSnapshot(`
			"<p>hello<!--<Text>--><!--<Renderer>--><!--<Children>--></p><!--<Default>--><!--<Renderer>-->
			<!--<Text>--><!--<Renderer>--><p>world<!--<Text>--><!--<Renderer>--><!--<Children>--></p><!--<Default>--><!--<Renderer>--><!--<Children>--><!--<Renderer>--><!--<ExtensibleSvelteMarkdown>-->"
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
			'"test <!--<Text>--><!--<Renderer>--><strong>bold1<!--<Text>--><!--<Renderer>--><!--<Children>--></strong><!--<Default>--><!--<Renderer>--> test <!--<Text>--><!--<Renderer>--><strong>bold2<!--<Text>--><!--<Renderer>--><!--<Children>--></strong><!--<Default>--><!--<Renderer>--><!--<Children>-->"'
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
			'"test <!--<Text>--><!--<Renderer>--><em>italic1<!--<Text>--><!--<Renderer>--><!--<Children>--></em><!--<Default>--><!--<Renderer>--> test <!--<Text>--><!--<Renderer>--><em>italic2<!--<Text>--><!--<Renderer>--><!--<Children>--></em><!--<Default>--><!--<Renderer>--><!--<Children>-->"'
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
			'"test <!--<Text>--><!--<Renderer>--><a href=\\"https://ssssota.github.io/\\">link<!--<Text>--><!--<Renderer>--><!--<Children>--></a><!--<Default>--><!--<Renderer>--><!--<Children>-->"'
		);

		ctx.rerender({ md: 'test [link](https://ssssota.github.io "title")' });
		el = screen.getByRole('link');
		expect(el.title).toBe('title');
		expect(el.parentElement?.innerHTML).toMatchInlineSnapshot(
			'"test <!--<Text>--><!--<Renderer>--><a href=\\"https://ssssota.github.io\\" title=\\"title\\">link<!--<Text>--><!--<Renderer>--><!--<Children>--></a><!--<Default>--><!--<Renderer>--><!--<Children>-->"'
		);
	});

	it('should render inline code', () => {
		render(Markdown, { md: 'test `code`' });
		const el = screen.getByText('code');
		expect(el.tagName.toLowerCase()).toBe('code');
		expect(el.parentElement?.innerHTML).toMatchInlineSnapshot(
			'"test <!--<Text>--><!--<Renderer>--><code>code<!--<Text>--><!--<Renderer>--><!--<Children>--></code><!--<Default>--><!--<Renderer>--><!--<Children>-->"'
		);
	});

	it('should render code', () => {
		let el: HTMLElement;
		const ctx = render(Markdown, { md: '```\nconst val = 1;\n```' });
		el = screen.getByText('const val = 1;');
		expect(el.tagName.toLowerCase()).toBe('code');
		expect(el.parentElement?.tagName.toLowerCase()).toBe('pre');
		expect(el.parentElement?.outerHTML).toMatchInlineSnapshot(`
			"<pre><code>const val = 1;
			<!--<Text>--><!--<Renderer>--><!--<Children>--></code><!--<Default>--><!--<Renderer>--><!--<Children>--></pre>"
		`);

		ctx.rerender({ md: '```js\nconst val = 1;\n```' });
		el = screen.getByText('const val = 1;');
		expect(el.className).toBe('language-js');
		expect(el.parentElement?.outerHTML).toMatchInlineSnapshot(`
			"<pre><code class=\\"language-js\\">const val = 1;
			<!--<Text>--><!--<Renderer>--><!--<Children>--></code><!--<Default>--><!--<Renderer>--><!--<Children>--></pre>"
		`);

		ctx.rerender({ md: '~~~js\nconst val = `2`;\n~~~' });
		el = screen.getByText('const val = `2`;');
		expect(el.className).toBe('language-js');
		expect(el.parentElement?.outerHTML).toMatchInlineSnapshot(`
			"<pre><code class=\\"language-js\\">const val = \`2\`;
			<!--<Text>--><!--<Renderer>--><!--<Children>--></code><!--<Default>--><!--<Renderer>--><!--<Children>--></pre>"
		`);
	});

	it('should render blockquote', () => {
		const ctx = render(Markdown, { md: '> test' });
		const p1 = screen.getByText('test');
		expect(p1.tagName.toLowerCase()).toBe('p');
		expect(p1.parentElement?.tagName.toLowerCase()).toBe('blockquote');
		expect(p1.parentElement?.outerHTML).toMatchInlineSnapshot(`
			"<blockquote>
			<!--<Text>--><!--<Renderer>--><p>test<!--<Text>--><!--<Renderer>--><!--<Children>--></p><!--<Default>--><!--<Renderer>-->
			<!--<Text>--><!--<Renderer>--><!--<Children>--></blockquote>"
		`);

		ctx.rerender({ md: '> top\n> > nested' });
		const p2 = screen.getByText('top');
		const p3 = screen.getByText('nested');
		expect(p3.parentElement?.tagName.toLowerCase()).toBe('blockquote');
		expect(p3.parentElement?.parentElement).toBe(p2.parentElement);
		expect(p2.parentElement?.outerHTML).toMatchInlineSnapshot(`
			"<blockquote>
			<!--<Text>--><!--<Renderer>--><p>top<!--<Text>--><!--<Renderer>--><!--<Children>--></p><!--<Default>--><!--<Renderer>-->
			<!--<Text>--><!--<Renderer>--><blockquote>
			<!--<Text>--><!--<Renderer>--><p>nested<!--<Text>--><!--<Renderer>--><!--<Children>--></p><!--<Default>--><!--<Renderer>-->
			<!--<Text>--><!--<Renderer>--><!--<Children>--></blockquote><!--<Default>--><!--<Renderer>-->
			<!--<Text>--><!--<Renderer>--><!--<Children>--></blockquote>"
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
			'"<div><hr><!--<Default>--><!--<Renderer>--><!--<Children>--><!--<Renderer>--><!--<ExtensibleSvelteMarkdown>--></div>"'
		);

		ctx.rerender({ md: '***\n---\n___' });
		expect(ctx.container.innerHTML).toMatchInlineSnapshot(`
			"<div><hr><!--<Default>--><!--<Renderer>-->
			<!--<Text>--><!--<Renderer>--><hr><!--<Default>--><!--<Renderer>-->
			<!--<Text>--><!--<Renderer>--><hr><!--<Default>--><!--<Renderer>--><!--<Children>--><!--<Renderer>--><!--<ExtensibleSvelteMarkdown>--></div>"
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

	it('should not render br tag', () => {
		const { container } = render(Markdown, { md: 'a<br>b' });
		expect(container.innerHTML.includes('<br>')).toBe(false);
	});
	it('should not br tag', () => {
		const { container } = render(Markdown, {
			md: 'a<br>b',
			plugins: [{ rehypePlugin: rehypeRaw }]
		});
		expect(container.innerHTML.includes('<br>')).toBe(true);
		expect(container.innerHTML).toMatchInlineSnapshot(
			'"<div><p>a<!--<Text>--><!--<Renderer>--><br><!--<Default>--><!--<Renderer>-->b<!--<Text>--><!--<Renderer>--><!--<Children>--></p><!--<Default>--><!--<Renderer>--><!--<Children>--><!--<Renderer>--><!--<ExtensibleSvelteMarkdown>--></div>"'
		);
	});
});
