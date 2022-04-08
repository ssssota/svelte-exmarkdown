import { getContext } from 'svelte';
import { writable, type Readable } from 'svelte/store';
import type { ComponentsMap } from './types';

export const componentsContextKey = {};
export const getComponentsContext = () =>
	getContext(componentsContextKey) as Readable<ComponentsMap>;
export const createComponentsContextValue = (init: ComponentsMap) => {
	const { set, subscribe } = writable(init);
	return { set, subscribe };
};
