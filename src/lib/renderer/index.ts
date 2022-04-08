import type { ComponentsMap } from '$lib/types';
import Blockquote from './Blockquote.svelte';
import Children from './Children.svelte';
import Code from './Code.svelte';
import Emphasis from './Emphasis.svelte';
import Heading from './Heading.svelte';
import Image from './Image.svelte';
import InlineCode from './InlineCode.svelte';
import Link from './Link.svelte';
import List from './List.svelte';
import ListItem from './ListItem.svelte';
import Paragraph from './Paragraph.svelte';
import Renderer from './Renderer.svelte';
import Strong from './Strong.svelte';
import Text from './Text.svelte';
import ThematicBreak from './ThematicBreak.svelte';

export const defaultComponents: ComponentsMap = {
	root: Children,
	heading: Heading,
	text: Text,
	paragraph: Paragraph,
	list: List,
	listItem: ListItem,
	link: Link,
	emphasis: Emphasis,
	strong: Strong,
	thematicBreak: ThematicBreak,
	inlineCode: InlineCode,
	code: Code,
	image: Image,
	blockquote: Blockquote
};
export {
	Children,
	Code,
	Emphasis,
	Heading,
	Image,
	InlineCode,
	Link,
	List,
	ListItem,
	Paragraph,
	Renderer,
	Strong,
	Text,
	ThematicBreak,
	Blockquote
};
export default Renderer;
