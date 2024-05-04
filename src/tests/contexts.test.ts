import { cleanup, render } from '@testing-library/svelte';
import { afterEach, expect, it } from 'vitest';
import Markdown from '../lib';
import RenderAstNode from './RenderAstNode.svelte';

afterEach(() => cleanup());

const skipPositionProperties = (key: string, value: unknown) =>
	key === 'position' ? undefined : value;

it('Plugin can access context', async () => {
	const ctx = render(Markdown, {
		md: 'test',
		plugins: [{ renderer: { p: RenderAstNode } }]
	});

	expect(
		JSON.parse(
			ctx.getByRole('status').textContent ?? '',
			skipPositionProperties
		)
	).toStrictEqual({
		type: 'element',
		tagName: 'p',
		properties: {},
		children: [{ type: 'text', value: 'test' }]
	});

	await ctx.rerender({
		md: 'test *em*',
		plugins: [{ renderer: { em: RenderAstNode } }]
	});
	expect(
		JSON.parse(
			ctx.getByRole('status').textContent ?? '',
			skipPositionProperties
		)
	).toStrictEqual({
		type: 'element',
		tagName: 'em',
		properties: {},
		children: [{ type: 'text', value: 'em' }]
	});
});
