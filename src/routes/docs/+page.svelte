<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	goto(resolve('/docs/[slug]', { slug: page.data?.docs?.[0]?.slug }));
</script>
