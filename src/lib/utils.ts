import remarkParse from 'remark-parse';
import { unified } from 'unified';
import type { Plugin, Node } from './types';

export const nonNullable = <T>(value: T | null | undefined): value is T => value != null;

export const createParser = (plugins: Plugin[]): ((md: string) => Node) =>
	unified()
		.use(remarkParse)
		.use(plugins.map((plugin) => plugin.remarkPlugin).filter(nonNullable)).parse;
