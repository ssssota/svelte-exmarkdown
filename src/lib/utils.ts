import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified, type Plugin as UnifiedPlugin } from 'unified';
import type { HastNode, Parser, Plugin, UnistNode } from './types';

export const nonNullable = <T>(value: T | null | undefined): value is T =>
	value != null;

const transform = (node: HastNode) => {
	if (
		node.type !== 'element' ||
		node.properties === undefined ||
		!Array.isArray(node.properties.className)
	)
		return;
	node.properties.class = node.properties.className.join(' ');
	delete node.properties.className;
};

const visit = (visitor: (node: HastNode) => unknown, node: HastNode) => {
	visitor(node);
	if (
		node.type === 'comemnt' ||
		node.type === 'doctype' ||
		node.type === 'text'
	)
		return;
	node.children?.forEach((child) => visit(visitor, child));
};

const rehypeReactClassNameToSvelteClass: UnifiedPlugin = () => {
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
		.use(rehypeReactClassNameToSvelteClass);
	return (md: string) => processor.runSync(processor.parse(md), md);
};
