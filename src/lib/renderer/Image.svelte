<script lang="ts">
	export let title: string | null = null;
	export let url: string;
	export let alt: string = '';
</script>

<img src={url} {alt} {title} />
