import type { ComponentsMap } from '$lib/types';
import Default from './Default.svelte';

// ref. https://developer.mozilla.org/docs/Web/HTML/Element
// prettier-ignore
const defaultTags = [
	// Content sectioning
	'address', 'article', 'aside', 'footer', 'header',
	'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
	'main', 'nav', 'section',
	// Text content
	'blockquote', 'dd', 'div', 'dl', 'dt',
	'figcaption', 'figure', 'hr', 'li',
	'menu', 'ol', 'p', 'pre', 'ul',
	// Inline text semantics
	'a', 'abbr', 'b', 'bdi', 'bdo', 'br', 'cite', 'code', 'data', 'dfn',
	'em', 'i', 'kbd', 'mark', 'q', 'rp', 'rt', 'ruby', 's', 'samp',
	'small', 'span', 'strong', 'sub', 'sup', 'time', 'u', 'var', 'wbr',
	// Image and multimedia
	'area', 'audio', 'img', 'map', 'track', 'video',
	// Embedded content
	'embed', 'iframe', 'object', 'param', 'picture', 'portal', 'source',
	// SVG and MathML
	'svg', 'math',
	// Demarcating edits
	'del', 'ins',
	// Table content
	'caption', 'col', 'colgroup', 'table', 'tbody',
	'td', 'tfoot', 'th', 'thead', 'tr',
	// Forms
	'button', 'datalist', 'fieldset', 'form', 'input',
	'label', 'legend', 'meter', 'optgroup', 'option',
	'output', 'progress', 'select', 'textarea',
	// Interactive elements
	'details', 'dialog', 'summary'
] as const;

export const htmlComponents = defaultTags.reduce<ComponentsMap>(
	(acc, tag) => ({ ...acc, [tag]: Default }),
	{}
);

export { Default };
export default htmlComponents;
