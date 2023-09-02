import { base } from '$app/paths';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ parent }) => {
	const data = await parent();
	const slug = data.docs?.[0]?.slug;
	throw redirect(307, slug ? `${base}/docs/${slug}` : '/');
}) satisfies PageLoad;
