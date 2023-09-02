import { cleanup, render } from '@testing-library/svelte';
import { afterEach, expect, it } from 'vitest';
import Markdown, { allowlist } from '../lib';

afterEach(() => cleanup());

it('should render paragraph instead of h1', () => {
	const ctx = render(Markdown, {
		md: '# test\n\n## skipped',
		plugins: [allowlist(['h1'])]
	});

	expect(ctx.container.innerHTML).toMatchInlineSnapshot(`
		"<div><h1>test<!--<Renderer>--></h1><!--<Renderer>-->
		<!--<Renderer>--><!--<Renderer>--><!--<Renderer>--><!--<Markdown>--></div>"
	`);
});
