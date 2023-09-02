import type { Plugin } from '$lib';
import Code from './Code.svelte';
export const mermaidPlugin: Plugin = {
	renderer: {
		code: Code
	}
};
