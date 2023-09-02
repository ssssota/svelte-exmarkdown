<script lang="ts">
	import 'water.css/out/light.min.css';
	import '../app.css';
</script>

<svelte:head>
	<title>svelte-exmarkdown</title>
	<meta
		name="description"
		content="svelte-exmarkdown. Svelte component to render markdown."
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		rel="preconnect"
		href="https://fonts.gstatic.com"
		crossorigin="anonymous"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<slot />
