<script lang="ts">
	import { base } from '$app/paths';
	import type { Snippet } from 'svelte';
	type Props = {
		children?: Snippet<[]>;
	};
	let { children }: Props = $props();
</script>

<header>
	<h1>
		<a href={base}>svelte-exmarkdown</a>
	</h1>
	<div class="spacer"></div>
	<nav class="right">
		{@render children?.()}
		<div>
			<a class="link" href="{base}/docs">Docs</a>
		</div>
		<div>
			<a
				class="link"
				target="_blank"
				rel="noreferrer"
				href="https://www.npmjs.com/package/svelte-exmarkdown"
			>
				npm
			</a>
		</div>
		<div>
			<a
				class="link"
				target="_blank"
				rel="noreferrer"
				href="https://github.com/ssssota/svelte-exmarkdown"
			>
				GitHub
			</a>
		</div>
	</nav>
</header>

<style>
	a {
		color: black;
		text-decoration: none;
	}
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
</style>
