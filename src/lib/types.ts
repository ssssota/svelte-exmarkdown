import type { SvelteComponent } from 'svelte';
import type { FrozenProcessor, Pluggable } from 'unified';

export type ComponentsMap = Record<string, typeof SvelteComponent>;
export type Plugin = {
	remarkPlugin?: Pluggable;
	rehypePlugin?: Pluggable;
	renderer?: ComponentsMap;
};
export type Node = ReturnType<FrozenProcessor['parse']>;
export type Parser = (md: string) => Node;
