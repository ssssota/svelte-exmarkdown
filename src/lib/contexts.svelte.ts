import { getContext, setContext } from 'svelte';
import type { ComponentsMap, HastNode } from './types';

type Ref<T> = { current: T };
export const ref = <T>(value: T): Ref<T> => {
	let inner = $state(value);
	return {
		get current() {
			return inner;
		},
		set current(newVal) {
			inner = newVal;
		}
	};
};

const componentsContextKey = 'components';
export const getComponentsMap = () =>
	getContext<Readonly<Ref<ComponentsMap>>>(componentsContextKey);
export const setComponentsContext = (value: Ref<ComponentsMap>) =>
	setContext(componentsContextKey, value);

const astContextKey = 'ast';
export const getAstNode = () =>
	getContext<Readonly<Ref<HastNode>>>(astContextKey);
export const setAstContext = (value: Ref<HastNode>) =>
	setContext(astContextKey, value);
