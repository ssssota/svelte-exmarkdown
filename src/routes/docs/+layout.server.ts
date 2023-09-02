import { readdir, readFile } from 'node:fs/promises';
import * as path from 'node:path';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	const dir = 'docs';
	const dirEntries = await readdir(dir, { withFileTypes: true });
	const docs = await Promise.all(
		dirEntries
			.filter((e) => e.isFile() && e.name.endsWith('.md'))
			.sort((a, b) => a.name.localeCompare(b.name))
			.map(async (e) => ({
				slug: e.name.replace(/.md$/i, ''),
				markdown: await readFile(path.join(dir, e.name), 'utf-8')
			}))
	);
	return { docs };
}) satisfies LayoutServerLoad;
