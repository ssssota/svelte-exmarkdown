import type { SvelteComponent } from 'svelte';
import type { Pluggable } from 'unified';
export type { Node } from 'unist';

export type ComponentsMap = Record<string, typeof SvelteComponent>;
export type Plugin = {
	remarkPlugin?: Pluggable;
	renderer?: ComponentsMap;
};
