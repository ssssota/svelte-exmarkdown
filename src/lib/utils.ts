import remarkParse from 'remark-parse';
import { unified } from 'unified';
import type { Plugin, Parser } from './types';

export const nonNullable = <T>(value: T | null | undefined): value is T => value != null;

export const createParser = (plugins: Plugin[]): Parser =>
	unified()
		.use(remarkParse)
		.use(plugins.map((plugin) => plugin.remarkPlugin).filter(nonNullable)).parse;
