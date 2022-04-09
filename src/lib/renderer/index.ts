import type { ComponentsMap } from '$lib/types';
import htmlComponents from './html';
import Renderer from './Renderer.svelte';

export const defaultComponents: ComponentsMap = {
	...htmlComponents
};
export default Renderer;
