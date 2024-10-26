import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified, type Plugin as UnifiedPlugin } from 'unified';
import type {
	Component,
	ComponentsMap,
	HastNode,
	Parser,
	Plugin,
	UnistNode
} from './types';

export const nonNullable = <T>(value: T | null | undefined): value is T =>
	value != null;

const camelToKebab = (str: string) =>
	str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

const transformClassName = (node: HastNode) => {
	// convert className array to class string
	if (
		node.type !== 'element' ||
		node.properties === undefined ||
		!Array.isArray(node.properties.className)
	)
		return;
	node.properties.class = node.properties.className.join(' ');
	delete node.properties.className;
};
const transformAriaProps = (node: HastNode) => {
	if (node.type !== 'element' || node.properties === undefined) return;
	const ariaProps = Object.keys(node.properties).filter((key) =>
		key.startsWith('aria')
	);
	for (const key of ariaProps) {
		const value = node.properties[key];
		delete node.properties[key];
		node.properties[camelToKebab(key)] = value;
	}
};
const transform = (node: HastNode) => {
	transformClassName(node);
	transformAriaProps(node);
};

const visit = (visitor: (node: HastNode) => unknown, node: HastNode) => {
	visitor(node);
	node.children?.forEach((child) => visit(visitor, child));
};

const rehypeReactPropsToSvelteProps: UnifiedPlugin = () => {
	return (node: UnistNode, _file, done) => {
		try {
			visit(transform, node as HastNode);
			done();
		} catch (e) {
			if (e instanceof Error) return done(e);
			return done(new Error(String(e)));
		}
	};
};

export const createParser = (plugins: Plugin[]): Parser => {
	const processor = unified()
		.use(remarkParse)
		.use(plugins.map((plugin) => plugin.remarkPlugin).filter(nonNullable))
		.use(remarkRehype, { allowDangerousHtml: true })
		.use(plugins.map((plugin) => plugin.rehypePlugin).filter(nonNullable))
		.use(rehypeReactPropsToSvelteProps);
	return (md: string) => processor.runSync(processor.parse(md), md);
};

export const resolveComponent = (
	map: ComponentsMap,
	tagName: string,
	circularCheck: string[] = []
): Component | string | null => {
	if (circularCheck.includes(tagName)) {
		circularCheck.push(tagName);
		throw new Error(
			`Circular dependency detected: ${circularCheck.join(' -> ')}`
		);
	}
	const component = map[tagName];
	if (typeof component === 'string') {
		return resolveComponent(map, component, [...circularCheck, tagName]);
	}
	if (component === null) return null;
	if (component === undefined) return tagName;
	return component;
};

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element
 */
// prettier-ignore
const htmlTags = [
	// Main root
	'html',
	// Document metadata
	'base','head','link','meta','style','title',
	// Sectioning root
	'body',
	// Content sectioning
	'address','article','aside','footer','header','h1','h2','h3','h4','h5','h6','hgroup','main','nav','section','search',
	// Text content
	'blockquote','dd','div','dl','dt','figcaption','figure','hr','li','menu','ol','p','pre','ul',
	// Inline text semantics
	'a','abbr','b','bdi','bdo','br','cite','code','data','dfn','em','i','kbd','mark','q','rp','rt','ruby','s','samp','small','span','strong','sub','sup','time','u','var','wbr',
	// Image and multimedia
	'area','audio','img','map','track','video',
	// Embedded content
	'embed','iframe','object','picture','portal','source',
	// SVG and MathML
	'svg','math',
	// Scripting
	'canvas','noscript','script',
	// Demarcating edits
	'del','ins','caption','col','colgroup',
	// Table content
	'table','tbody','td','tfoot','th','thead','tr',
	// Forms
	'button','datalist','fieldset','form','input','label','legend','meter','optgroup','option','output','progress','select','textarea',
	// Interactive elements
	'details','dialog','summary',
	// Web Components
	'slot','template',
	// Obsolete and deprecated elements
	'acronym','big','center','content','dir','font','frame','frameset','image','marquee','menuitem','nobr','noembed','noframes','param','plaintext','rb','rtc','shadow','strike','tt','xmp'
] as const;

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element#svg_elements_a_to_z
 * Excluding html tags
 */
// prettier-ignore
export const svgTags = [
	/* 'a',  */'animate', 'animateMotion', 'animateTransform',
	'circle', 'clipPath',
	'defs', 'desc',
	'ellipse',
	'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feDropShadow', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'foreignObject',
	'g',
	'hatch', 'hatchpath',
	/* 'image', */
	'line', 'linearGradient',
	'marker', 'mask', 'metadata', 'mpath',
	'path', 'pattern', 'polygon', 'polyline',
	'radialGradient', 'rect',
	/* 'script',  */'set', 'stop', /* 'style',  */'svg', 'switch', 'symbol',
	'text', 'textPath', /* 'title',  */'tspan',
	'use',
	'view'
] as const;
export const isSvgTag = (tag: string): tag is (typeof svgTags)[number] => {
	return (svgTags as readonly string[]).includes(tag);
};

export const htmlAndSvgTags = [...htmlTags, ...svgTags];

export type Tag = (typeof htmlAndSvgTags)[number];
export const allowlist = (tags: Tag[]): Plugin => ({
	renderer: Object.fromEntries(
		htmlAndSvgTags
			.filter((tag) => !tags.includes(tag))
			.map((tag) => [tag, null])
	)
});
export const denylist = (tags: Tag[]): Plugin => ({
	renderer: Object.fromEntries(tags.map((tag) => [tag, null]))
});
