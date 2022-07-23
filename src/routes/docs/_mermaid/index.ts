import type { Plugin } from '$lib';
import Pre from './Pre.svelte';
export const mermaidPlugin: Plugin = {
	renderer: {
		pre: Pre
	}
};
