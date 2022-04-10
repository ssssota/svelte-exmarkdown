import type { ComponentsMap } from '$lib/types';
import htmlComponents from './html';
import Renderer from './Renderer.svelte';
import Text from './Text.svelte';

export const defaultComponents: ComponentsMap = {
	...htmlComponents,
	text: Text
};
export default Renderer;
