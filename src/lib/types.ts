import type { SvelteComponent } from 'svelte';
import type { FrozenProcessor, Pluggable } from 'unified';

export type ComponentsMap = Record<string, typeof SvelteComponent>;
export type Plugin = {
	remarkPlugin?: Pluggable;
	rehypePlugin?: Pluggable;
	renderer?: ComponentsMap;
};

export type UnistNode = ReturnType<FrozenProcessor['parse']>;
export type HastProperties = Record<string, unknown>;
export type HastParent = {
	children: (HastElement | HastDoctype | HastComment | HastText)[];
};
export type HastLiteral = { value: string };
export type HastRoot = HastParent & { type: 'root' };
export type HastElement = HastParent & {
	type: 'element';
	tagName: string;
	properties?: HastProperties;
	content?: HastRoot;
	children: (HastElement | HastComment | HastText)[];
};
export type HastDoctype = UnistNode & { type: 'doctype' };
export type HastComment = HastLiteral & { type: 'comemnt' };
export type HastText = HastLiteral & { type: 'text' };
export type HastNode =
	| HastRoot
	| HastElement
	| HastDoctype
	| HastComment
	| HastText;

export type Parser = (md: string) => UnistNode;
