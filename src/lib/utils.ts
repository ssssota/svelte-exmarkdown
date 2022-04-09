import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import type { Plugin, Parser } from './types';

export const nonNullable = <T>(value: T | null | undefined): value is T => value != null;

export const createParser = (plugins: Plugin[]): Parser => {
	const processor = unified()
		.use(remarkParse)
		.use(plugins.map((plugin) => plugin.remarkPlugin).filter(nonNullable))
		.use(remarkRehype)
		.use(plugins.map((plugin) => plugin.rehypePlugin).filter(nonNullable));
	return (md: string) => processor.runSync(processor.parse(md), md);
};
