import { cleanup, render } from '@testing-library/svelte';
import { afterEach, expect, it } from 'vitest';
import Markdown from '../lib/Markdown.svelte';
import Transparent from '../lib/Transparent.svelte';

afterEach(() => cleanup());

it('should not render children', () => {
	const ctx = render(Markdown, {
		md: 'test',
		plugins: [{ renderer: { p: Transparent } }]
	});

	expect(ctx.container.children[0]?.innerHTML).toMatchInlineSnapshot(
		'"test<!--<Renderer>--><!--<Transparent>--><!--<Renderer>--><!--<Renderer>--><!--<Markdown>-->"'
	);

	ctx.rerender({
		md: 'test *em*',
		plugins: [{ renderer: { em: Transparent } }]
	});
	expect(ctx.container.children[0]?.innerHTML).toMatchInlineSnapshot(
		'"<p>test <!--<Renderer>-->em<!--<Renderer>--><!--<Transparent>--><!--<Renderer>--></p><!--<Element>--><!--<Renderer>--><!--<Renderer>--><!--<Markdown>-->"'
	);
});
