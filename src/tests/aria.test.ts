import { render } from '@testing-library/svelte';
import rehypeRaw from 'rehype-raw';
import { expect, it } from 'vitest';
import Markdown from '../lib';

it('should render aria props correctly', () => {
	const ctx = render(Markdown, {
		md: '<input aria-label="test" />',
		plugins: [{ rehypePlugin: [rehypeRaw] }]
	});
	const input = ctx.getByRole('textbox');
	expect(input.ariaLabel).toBe('test');
});
