import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit(), svelteTesting()],
	test: {
		environment: 'jsdom',
		coverage: {
			reporter: ['clover', 'cobertura', 'lcov', 'text'],
			include: ['src/lib/**']
		},
		dir: 'src'
	}
});
