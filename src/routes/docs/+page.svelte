<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	goto(`${base}/docs/${$page.data?.docs?.[0]?.slug}`);
</script>
