import { cleanup, render } from '@testing-library/svelte';
import { afterEach, expect, it } from 'vitest';
import Markdown, { denylist } from '../lib';

afterEach(() => cleanup());

it('should render paragraph instead of h1', () => {
	const ctx = render(Markdown, {
		md: '# test\n\n## skipped',
		plugins: [denylist(['h2'])]
	});

	expect(ctx.container.innerHTML).toMatchInlineSnapshot(`
		"<h1>test<!--<Renderer>--></h1><!--<Renderer>-->
		<!--<Renderer>--><!--<Renderer>--><!--<Renderer>--><!--<Markdown>-->"
	`);
});
