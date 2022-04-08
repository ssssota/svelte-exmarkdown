<script lang="ts">
	export let title: string | null = null;
	export let url: string;
	export let alt = '';
</script>

<img src={url} {alt} {title} />
