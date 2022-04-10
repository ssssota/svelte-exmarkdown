import { afterEach, expect, describe, it } from 'vitest';
import Markdown from '../src/lib';
import { cleanup, render, screen } from '@testing-library/svelte';

describe('Markdown(CommonMark)', () => {
	afterEach(() => cleanup());

	it('should render headings', () => {
		const ctx = render(Markdown, { md: '# test1' });
		expect(screen.getByRole('heading', { level: 1 }).innerHTML.trim()).toBe('test1');

		ctx.rerender({ md: '## test2' });
		expect(screen.getByRole('heading', { level: 2 }).innerHTML.trim()).toBe('test2');

		ctx.rerender({ md: '### test3' });
		expect(screen.getByRole('heading', { level: 3 }).innerHTML.trim()).toBe('test3');

		ctx.rerender({ md: '#### test4' });
		expect(screen.getByRole('heading', { level: 4 }).innerHTML.trim()).toBe('test4');

		ctx.rerender({ md: '##### test5' });
		expect(screen.getByRole('heading', { level: 5 }).innerHTML.trim()).toBe('test5');

		ctx.rerender({ md: '###### test6' });
		expect(screen.getByRole('heading', { level: 6 }).innerHTML.trim()).toBe('test6');

		// alt syntax
		ctx.rerender({ md: 'test1\n====' });
		expect(screen.getByRole('heading', { level: 1 }).innerHTML.trim()).toBe('test1');

		ctx.rerender({ md: 'test2\n----' });
		expect(screen.getByRole('heading', { level: 2 }).innerHTML.trim()).toBe('test2');
	});

	it('should render paragraph', () => {
		const ctx = render(Markdown, { md: 'para1' });
		expect(screen.getByText('para1').tagName.toLowerCase()).toBe('p');

		ctx.rerender({ md: 'hello\nworld' });
		expect(screen.getByText('hello world').tagName.toLowerCase()).toBe('p');

		// multi paragraph
		ctx.rerender({ md: 'hello\n\nworld' });
		expect(screen.getByText('hello').tagName.toLowerCase()).toBe('p');
		expect(screen.getByText('world').tagName.toLowerCase()).toBe('p');
	});

	it('should render strong/bold', () => {
		render(Markdown, { md: 'test **bold1** test __bold2__' });
		expect(screen.getByText('bold1').tagName.toLowerCase()).toBe('strong');
		expect(screen.getByText('bold2').tagName.toLowerCase()).toBe('strong');
	});

	it('should render emphasis/italic', () => {
		render(Markdown, { md: 'test *italic1* test _italic2_' });
		expect(screen.getByText('italic1').tagName.toLowerCase()).toBe('em');
		expect(screen.getByText('italic2').tagName.toLowerCase()).toBe('em');
	});

	it('should render anchor/link', () => {
		const ctx = render(Markdown, { md: 'test [link](https://ssssota.github.io/)' });
		const a1 = screen.getByRole('link') as HTMLAnchorElement;
		expect(a1.href).toBe('https://ssssota.github.io/');
		expect(a1.textContent).toBe('link');

		ctx.rerender({ md: 'test [link](https://ssssota.github.io "title")' });
		const a2 = screen.getByRole('link');
		expect(a2.title).toBe('title');
	});

	it('should render inline code', () => {
		render(Markdown, { md: 'test `code`' });
		expect(screen.getByText('code').tagName.toLowerCase()).toBe('code');
	});

	it('should render code', () => {
		const ctx = render(Markdown, { md: '```\nconst val = 1;\n```' });
		const code = screen.getByText('const val = 1;');
		expect(code.tagName.toLowerCase()).toBe('code');
		expect(code.parentElement.tagName.toLowerCase()).toBe('pre');

		ctx.rerender({ md: '```js\nconst val = 1;\n```' });
		expect(screen.getByText('const val = 1;').className).toBe('language-js');

		ctx.rerender({ md: '~~~js\nconst val = `2`;\n~~~' });
		expect(screen.getByText('const val = `2`;').className).toBe('language-js');
	});

	it('should render blockquote', () => {
		const ctx = render(Markdown, { md: '> test' });
		const p1 = screen.getByText('test');
		expect(p1.tagName.toLowerCase()).toBe('p');
		expect(p1.parentElement.tagName.toLowerCase()).toBe('blockquote');

		ctx.rerender({ md: '> top\n> > nested' });
		const p2 = screen.getByText('top');
		const p3 = screen.getByText('nested');
		expect(p3.parentElement.tagName.toLowerCase()).toBe('blockquote');
		expect(p3.parentElement.parentElement).toBe(p2.parentElement);
	});

	it('should render unordered list', () => {
		const ctx = render(Markdown, { md: '- item1' });
		const li1 = screen.getByText('item1');
		expect(li1.tagName.toLowerCase()).toBe('li');
		expect(li1.parentElement.tagName.toLowerCase()).toBe('ul');

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
		expect(li5.parentElement.parentElement).toBe(li4);
		expect(li5.parentElement.parentElement.parentElement).toBe(li6.parentElement);
	});

	it('should render ordered list', () => {
		const ctx = render(Markdown, { md: '1. item1' });
		const li1 = screen.getByText('item1');
		expect(li1.tagName.toLowerCase()).toBe('li');
		expect(li1.parentElement.tagName.toLowerCase()).toBe('ol');

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
		expect(li5.parentElement.parentElement).toBe(li4);
		expect(li5.parentElement.parentElement.parentElement).toBe(li6.parentElement);
	});

	it('should render themantic break', () => {
		const ctx = render(Markdown, { md: '----------' });
		expect(ctx.container.children[0].innerHTML).toBe('<hr>');

		ctx.rerender({ md: '***\n---\n___' });
		[...ctx.container.children[0].children].forEach((el) => expect(el.outerHTML).toBe('<hr>'));
	});
});
