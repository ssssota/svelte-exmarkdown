<script lang="ts">
	import { base } from '$app/paths';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<ul>
	{#each Object.entries(data.docs) as [slug, title] (slug)}
		<li>
			<a href="{base}/docs/{slug}">{title}</a>
		</li>
	{/each}
</ul>
