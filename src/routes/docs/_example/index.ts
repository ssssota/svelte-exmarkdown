import type { HastNode, Plugin } from '$lib';
import type { Root as MdastRoot } from 'mdast';
import type { Component } from 'svelte';
import Allowlist from './Allowlist.svelte';
import AllowlistText from './Allowlist.svelte?raw';
import Ast from './Ast.svelte';
import AstText from './Ast.svelte?raw';
import CodeHightlight from './CodeHightlight.svelte';
import CodeHightlightText from './CodeHightlight.svelte?raw';
import ComponentsMap from './ComponentsMap.svelte';
import ComponentsMapText from './ComponentsMap.svelte?raw';
import Denylist from './Denylist.svelte';
import DenylistText from './Denylist.svelte?raw';
import MathFormula from './MathFormula.svelte';
import MathFormulaText from './MathFormula.svelte?raw';
import RawHtml from './RawHtml.svelte';
import RawHtmlText from './RawHtml.svelte?raw';
import Shiki from './Shiki.svelte';
import ShikiText from './Shiki.svelte?raw';
import SkipRendering from './SkipRendering.svelte';
import SkipRenderingText from './SkipRendering.svelte?raw';
import Transparent from './Transparent.svelte';
import TransparentText from './Transparent.svelte?raw';

const components: Record<string, { raw: string; component: Component }> = {
	'raw-html': {
		raw: RawHtmlText,
		component: RawHtml
	},
	'code-highlight': {
		raw: CodeHightlightText,
		component: CodeHightlight
	},
	'math-formula': {
		raw: MathFormulaText,
		component: MathFormula
	},
	'skip-rendering': {
		raw: SkipRenderingText,
		component: SkipRendering
	},
	denylist: {
		raw: DenylistText,
		component: Denylist
	},
	allowlist: {
		raw: AllowlistText,
		component: Allowlist
	},
	transparent: {
		raw: TransparentText,
		component: Transparent
	},
	'components-map': {
		raw: ComponentsMapText,
		component: ComponentsMap
	},
	ast: {
		raw: AstText,
		component: Ast
	},
	shiki: {
		raw: ShikiText,
		component: Shiki
	}
};

export const examplePlugin: Plugin = {
	remarkPlugin: () => (tree: MdastRoot) => {
		tree.children = tree.children.flatMap((child) => {
			if (child.type !== 'paragraph') return child;
			if (child.children.length !== 1) return child;
			const [firstChild] = child.children;
			if (firstChild === undefined || firstChild.type !== 'text') return child;
			const matched = firstChild.value.match(/^:([a-z-]+)$/)?.[1];
			if (matched === undefined) return child;
			const component = components[matched];
			if (component === undefined) return child;
			return [
				{
					type: 'code',
					lang: 'svelte',
					value: component.raw.replace(
						/import (.+) from '\$lib';/gm,
						"import $1 from 'svelte-exmarkdown';"
					)
				},
				{
					type: 'text',
					value: '',
					data: { hName: matched }
				}
			] as typeof tree.children;
		});
	},
	rehypePlugin: () => (tree: HastNode) => {
		tree.children = tree.children?.flatMap((child) => {
			if (child.type !== 'element') return child;
			const component = components[child.tagName];
			if (component === undefined) return child;
			return {
				type: 'element',
				tagName: 'section',
				properties: { className: ['example-output'] },
				children: [{ type: 'element', tagName: child.tagName, children: [] }]
			};
		});
	},
	renderer: Object.fromEntries(
		Object.entries(components).map(([key, { component }]) => [key, component])
	)
};
