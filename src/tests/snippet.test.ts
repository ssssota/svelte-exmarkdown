import { render } from '@testing-library/svelte/svelte5';
import { expect, it } from 'vitest';
import Markdown from '../lib/Markdown.svelte';
import { pBlue, pRed } from './Snippets.svelte';

it('should render with snippet', async () => {
	const ctx = render(Markdown, { md: 'test', p: pRed });

	expect(ctx.container.innerHTML).toMatchInlineSnapshot(
		`"<!----><!----><!----><!----><!----><!----><!----><!----><!----><p class="color:red;"><!----><!----><!----><!---->test<!----></p>"`
	);

	await ctx.rerender({ md: 'test2', p: pBlue });
	expect(ctx.container.innerHTML).toMatchInlineSnapshot(
		`"<!----><!----><!----><!----><!----><!----><!----><!----><!----><p class="color:blue;"><!----><!----><!----><!---->test2<!----></p>"`
	);

	await ctx.rerender({ md: 'test2', p: undefined });
	expect(ctx.container.innerHTML).toMatchInlineSnapshot(
		`"<!----><!----><!----><!----><!----><!----><!----><!----><p><!----><!----><!----><!---->test2</p>"`
	);
});
