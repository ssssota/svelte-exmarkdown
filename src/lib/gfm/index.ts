import remarkGfm from 'remark-gfm';
import type { Plugin } from '../types';
export const gfmPlugin: Plugin = {
	remarkPlugin: [remarkGfm]
};
