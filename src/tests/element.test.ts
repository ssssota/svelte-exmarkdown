import { render } from '@testing-library/svelte/svelte5';
import { expect, it } from 'vitest';
import Markdown from '../lib';

it('should render paragraph instead of h1', () => {
	const ctx = render(Markdown, {
		md: '# test',
		plugins: [{ renderer: { h1: 'p' } }]
	});

	expect(ctx.container.innerHTML).toMatchInlineSnapshot(
		`"<!----><!----><!----><!----><!----><!----><!----><!----><p><!----><!----><!----><!---->test</p>"`
	);
});

it('should throw error because circular reference', () => {
	expect(() =>
		render(Markdown, {
			md: '# test',
			plugins: [{ renderer: { h1: 'h1' } }]
		})
	).toThrowErrorMatchingInlineSnapshot(
		`
		[Error: Circular dependency detected: h1 -> h1

			in Renderer.svelte
			in Renderer.svelte
			in Markdown.svelte
		]
	`
	);

	expect(() =>
		render(Markdown, {
			md: '# test',
			plugins: [{ renderer: { h1: 'h2', h2: 'h1' } }]
		})
	).toThrowErrorMatchingInlineSnapshot(
		`
		[Error: Circular dependency detected: h1 -> h2 -> h1

			in Renderer.svelte
			in Renderer.svelte
			in Markdown.svelte
		]
	`
	);
});
