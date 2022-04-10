<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="wrapper">
	<header>
		<h1>
			<a href={base}> svelte-exmarkdown</a>
		</h1>
		<div class="spacer" />
		<nav class="right">
			<div>
				<a class="link" href="{base}/docs">Docs</a>
			</div>
			<div>
				<a class="link" target="_blank" href="https://www.npmjs.com/package/svelte-exmarkdown">
					npm
				</a>
			</div>
			<div>
				<a class="link" target="_blank" href="https://github.com/ssssota/svelte-exmarkdown">
					GitHub
				</a>
			</div>
		</nav>
	</header>
	<main>
		<slot />
	</main>
</div>

<style>
	header {
		padding: 0 2em;
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
	}
	.spacer {
		flex-grow: 1;
	}
	.right {
		display: flex;
		gap: 1em;
	}
	a {
		color: black;
		text-decoration: none;
	}
	main {
		max-width: 800px;
		margin: 1em auto;
	}
</style>
