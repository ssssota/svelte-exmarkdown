import remarkGfm from 'remark-gfm';
import type { Plugin } from '../types';
import Del from './Del.svelte';
import ListItem from './ListItem.svelte';
import Table from './Table.svelte';
import TableCell from './TableCell.svelte';
import TableRow from './TableRow.svelte';

export { Table, TableCell, TableRow };

export const gfmPlugin: Plugin = {
	remarkPlugin: remarkGfm,
	renderer: {
		table: Table,
		tableCell: TableCell,
		tableRow: TableRow,
		listItem: ListItem,
		delete: Del
	}
};
