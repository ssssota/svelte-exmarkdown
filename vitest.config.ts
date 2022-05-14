import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [svelte({ hot: !process.env.VITEST }), tsconfigPaths()],
	test: {
		globals: true,
		environment: 'jsdom',
		coverage: {
			reporter: ['clover', 'cobertura', 'lcov', 'text']
		}
	}
});
