import remarkGfm from 'remark-gfm';
import type { Plugin } from '../types';
import Del from './Del.svelte';
import Table from './Table.svelte';
import Tbody from './Tbody.svelte';
import Thead from './Thead.svelte';
import Tr from './Tr.svelte';
import Th from './Th.svelte';
import Td from './Td.svelte';

export const gfmPlugin: Plugin = {
	remarkPlugin: remarkGfm,
	renderer: {
		del: Del,
		table: Table,
		tbody: Tbody,
		thead: Thead,
		tr: Tr,
		th: Th,
		td: Td
	}
};
export { Table, Tbody, Thead, Tr, Th, Td };
