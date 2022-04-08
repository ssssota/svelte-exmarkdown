import remarkGfm from 'remark-gfm';
import Table from './Table.svelte';
import TableCell from './TableCell.svelte';
import TableRow from './TableRow.svelte';
import type { Plugin } from '../types';

export { Table, TableCell, TableRow };

export const gfmPlugin: Plugin = {
	remarkPlugin: remarkGfm,
	renderer: {
		table: Table,
		tableCell: TableCell,
		tableRow: TableRow
	}
};
