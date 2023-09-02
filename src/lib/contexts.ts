import { getContext, setContext } from 'svelte';
import { writable, type Readable } from 'svelte/store';
import type { ComponentsMap, HastNode } from './types';

const componentsContextKey = 'components';
export const getComponentsMap = () =>
	getContext<Readable<ComponentsMap>>(componentsContextKey);
export const setComponentsContext = (value: Readable<ComponentsMap>) =>
	setContext(componentsContextKey, value);
export const createComponentsContextValue = (init: ComponentsMap) => {
	const { set, subscribe } = writable(init);
	return { set, subscribe };
};

const astContextKey = 'ast';
export const getAstNode = () => getContext<Readable<HastNode>>(astContextKey);
export const setAstContext = (value: Readable<HastNode>) =>
	setContext(astContextKey, value);
export const createAstContextValue = (init: HastNode) => {
	const { set, subscribe } = writable(init);
	return { set, subscribe };
};
