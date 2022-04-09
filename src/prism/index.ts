import type { Plugin } from '$lib';
import Code from './Code.svelte';

export const highlightPlugin: Plugin = {
	renderer: {
		code: Code
	}
};
