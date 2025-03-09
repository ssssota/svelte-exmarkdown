import { getContext, setContext } from 'svelte';
import type { ComponentsMap, HastNode, Readable } from './types';

const componentsContextKey = 'components';
export const getComponentsMap = () =>
	getContext<Readable<ComponentsMap>>(componentsContextKey);
export const setComponentsContext = (value: Readable<ComponentsMap>) =>
	setContext(componentsContextKey, value);

export const createComponentsContextValue = (init: ComponentsMap) => {
	let value = $state(init);
	return {
		set current(components: ComponentsMap) {
			value = components;
		},
		get current() {
			return value;
		}
	};
};

const astContextKey = 'ast';
export const getAstNode = () => getContext<Readable<HastNode>>(astContextKey);
export const setAstContext = (value: Readable<HastNode>) =>
	setContext(astContextKey, value);

export const createAstContextValue = (init: HastNode) => {
	let value = $state(init);
	return {
		set current(node: HastNode) {
			value = node;
		},
		get current() {
			return value;
		}
	};
};
