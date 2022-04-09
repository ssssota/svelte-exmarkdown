<script lang="ts">
	import { base } from '$app/paths';

	export let docs: Record<string, string>;
</script>

<ul>
	{#each Object.entries(docs) as [slug, title] (slug)}
		<li>
			<a href="{base}/docs/{slug}">{title}</a>
		</li>
	{/each}
</ul>
