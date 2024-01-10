import { cleanup, render } from '@testing-library/svelte';
import { afterEach, expect, it } from 'vitest';
import Markdown from '../lib';

afterEach(() => cleanup());

it('should render paragraph instead of h1', () => {
	const ctx = render(Markdown, {
		md: '# test',
		plugins: [{ renderer: { h1: 'p' } }]
	});

	expect(ctx.container.innerHTML).toMatchInlineSnapshot(
		'"<div><p>test<!--<Renderer>--></p><!--<Element>--><!--<Renderer>--><!--<Renderer>--><!--<Markdown>--></div>"'
	);
});

it('should throw error because circular reference', () => {
	expect(() =>
		render(Markdown, {
			md: '# test',
			plugins: [{ renderer: { h1: 'h1' } }]
		})
	).toThrowErrorMatchingInlineSnapshot(
		'"Circular dependency detected: h1 -> h1"'
	);

	expect(() =>
		render(Markdown, {
			md: '# test',
			plugins: [{ renderer: { h1: 'h2', h2: 'h1' } }]
		})
	).toThrowErrorMatchingInlineSnapshot(
		'"Circular dependency detected: h1 -> h2 -> h1"'
	);
});
