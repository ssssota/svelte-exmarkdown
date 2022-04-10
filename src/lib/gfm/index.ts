import remarkGfm from 'remark-gfm';
import type { Plugin } from '../types';
import TableCell from './TableCell.svelte';

export const gfmPlugin: Plugin = {
	remarkPlugin: remarkGfm,
	renderer: {
		th: TableCell,
		td: TableCell
	}
};
