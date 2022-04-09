import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified, type Plugin as UnifiedPlugin } from 'unified';
import type { Plugin, Parser, Node } from './types';

export const nonNullable = <T>(value: T | null | undefined): value is T => value != null;

const transform = (node: Node) => {
	const properties = (node as unknown as { properties?: Record<string, unknown> }).properties;
	if (properties === undefined || !Array.isArray(properties.className)) return;
	properties.class = properties.className.join(' ');
};

const visit = (visitor: (node: Node) => unknown, node: Node) => {
	visitor(node);
	const children = (node as unknown as { children?: Node[] }).children;
	if (children == null) return;
	children.forEach((child) => visit(visitor, child));
};

const rehypeReactClassNameToSvelteClass: UnifiedPlugin = () => {
	return (node: Node, _file, done) => {
		try {
			visit(transform, node);
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
		.use(remarkRehype)
		.use(plugins.map((plugin) => plugin.rehypePlugin).filter(nonNullable))
		.use(rehypeReactClassNameToSvelteClass);
	return (md: string) => processor.runSync(processor.parse(md), md);
};
