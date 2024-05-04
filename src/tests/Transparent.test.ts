import { cleanup, render } from '@testing-library/svelte';
import { afterEach, expect, it } from 'vitest';
import Markdown from '../lib/Markdown.svelte';
import Transparent from '../lib/Transparent.svelte';

afterEach(() => cleanup());

it('should not render children', async () => {
	const ctx = render(Markdown, {
		md: 'test',
		plugins: [{ renderer: { p: Transparent } }]
	});

	expect(ctx.container.innerHTML).toMatchInlineSnapshot(
		`"test<!--<Renderer>--><!--<Transparent>--><!--<Renderer>--><!--<Renderer>--><!--<Markdown>-->"`
	);

	await ctx.rerender({
		md: 'test *em*',
		plugins: [{ renderer: { em: Transparent } }]
	});
	expect(ctx.container.innerHTML).toMatchInlineSnapshot(
		`"<p>test <!--<Renderer>-->em<!--<Renderer>--><!--<Transparent>--><!--<Renderer>--></p><!--<Renderer>--><!--<Renderer>--><!--<Markdown>-->"`
	);
});
