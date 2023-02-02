<script lang="ts">
	import Header from '../Header.svelte';
</script>

<div class="wrapper">
	<Header />
	<main>
		<slot />
	</main>
</div>

<style>
	main {
		max-width: 800px;
		margin: 1em auto;
	}
</style>
