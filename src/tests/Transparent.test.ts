import { render } from '@testing-library/svelte/svelte5';
import { expect, it } from 'vitest';
import Markdown from '../lib/Markdown.svelte';
import Transparent from '../lib/Transparent.svelte';

it('should not render children', async () => {
	const ctx = render(Markdown, {
		md: 'test',
		plugins: [{ renderer: { p: Transparent } }]
	});

	expect(ctx.container.innerHTML).toMatchInlineSnapshot(
		`"<!----><!----><!----><!----><!----><!----><!----><!----><!---->test"`
	);

	await ctx.rerender({
		md: 'test *em*',
		plugins: [{ renderer: { em: Transparent } }]
	});
	expect(ctx.container.innerHTML).toMatchInlineSnapshot(
		`"<!----><!----><!----><!----><!----><!----><p><!----><!---->test <!----><!----><!----><!----><!----><!----><!---->em</p>"`
	);
});
