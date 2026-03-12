import { render } from '@testing-library/svelte/svelte5';
import { expect, it } from 'vitest';
import Markdown, { allowlist } from '../lib';

it('should render paragraph instead of h1', () => {
	const ctx = render(Markdown, {
		md: '# test\n\n## skipped',
		plugins: [allowlist(['h1'])]
	});

	expect(ctx.container.innerHTML).toMatchInlineSnapshot(`
		"<!----><!----><!----><!----><!----><!----><h1><!----><!---->test</h1><!---->
		<!----><!---->"
	`);
});
