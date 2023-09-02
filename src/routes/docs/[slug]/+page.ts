import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ parent, params }) => {
	const data = await parent();
	const current = data.docs.findIndex((doc) => doc.slug === params.slug);
	const markdown = data.docs[current]?.markdown;
	if (!markdown) throw error(404);
	return {
		markdown,
		prev: data.docs[current - 1],
		next: data.docs[current + 1]
	};
}) satisfies PageLoad;
