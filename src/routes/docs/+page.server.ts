import { docs, getTitleFromContent } from '../../utils';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		docs: Object.fromEntries(
			Object.entries(docs).map(([slug, md]) => [slug, getTitleFromContent(md)])
		)
	};
}) satisfies PageServerLoad;
