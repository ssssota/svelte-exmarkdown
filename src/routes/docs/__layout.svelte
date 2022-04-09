<div class="wrapper">
	<header>
		<h1>
			<a href=".."> svelte-exmarkdown</a>
		</h1>
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
	a {
		color: black;
		text-decoration: none;
	}
	main {
		max-width: 800px;
		margin: 1em auto;
	}
</style>
