import type { RequestHandler } from '@sveltejs/kit';
import { docs, getTitleFromContent } from '../../utils';

export const GET: RequestHandler = async ({ params }) => {
	const entries = Object.entries(docs).sort(([a], [b]) => (a > b ? 1 : -1));
	const index = entries.findIndex(([slug]) => params.slug === slug);
	const prev =
		entries[index - 1] === undefined
			? undefined
			: [entries[index - 1][0], getTitleFromContent(entries[index - 1][1])];
	const next =
		entries[index + 1] === undefined
			? undefined
			: [entries[index + 1][0], getTitleFromContent(entries[index + 1][1])];
	return {
		body: {
			md: entries[index][1],
			prev,
			next
		}
	};
};
