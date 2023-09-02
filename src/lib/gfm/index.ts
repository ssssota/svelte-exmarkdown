import remarkGfm from 'remark-gfm';
import type { Plugin } from '../types';
export const gfmPlugin = (
	options: Parameters<typeof remarkGfm>[0] = {}
): Plugin => ({ remarkPlugin: [remarkGfm, options] });
