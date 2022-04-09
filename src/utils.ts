import { readdirSync, readFileSync } from 'fs';

export const docs = ((): Record<string, string> => {
	const dirEntries = readdirSync('docs', { withFileTypes: true });
	const entries = dirEntries
		.filter((e) => e.isFile() && e.name.endsWith('.md'))
		.map((e) => [e.name.replace(/.md$/i, ''), readFileSync(`docs/${e.name}`, 'utf-8')]);

	return entries.reduce<Record<string, string>>((acc, [name, md]) => ({ ...acc, [name]: md }), {});
})();

export const getTitleFromContent = (md: string): string =>
	md.trim().split('\n')[0].replace(/^# /, '');
