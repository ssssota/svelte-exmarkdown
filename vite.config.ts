import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vitest/config';

export default {
	plugins: [sveltekit()],
	test: {
		environment: 'jsdom',
		coverage: {
			reporter: ['clover', 'cobertura', 'lcov', 'text']
		}
	}
} satisfies UserConfig;
