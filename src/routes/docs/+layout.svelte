<svelte:options runes={false} />

<script lang="ts">
	import { base } from '$app/paths';
	import Header from '../Header.svelte';
	import type { LayoutData } from './$types';
	import { getTitleFromMarkdown } from './utils';
	export let data: LayoutData;
</script>

<div class="wrapper">
	<Header />
	<main>
		<nav>
			<details>
				<summary>Table of contents</summary>
				<ol>
					{#each data.docs as { slug, markdown } (slug)}
						<li>
							<a href="{base}/docs/{slug}">{getTitleFromMarkdown(markdown)}</a>
						</li>
					{/each}
				</ol>
			</details>
		</nav>
		<slot />
	</main>
</div>

<style>
	main {
		max-width: 800px;
		margin: 1em auto;
	}
</style>
