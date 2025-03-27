<script lang="ts">
	import Markdown from '$lib';

	let md = $state('# Red underlined!');
</script>

<textarea bind:value={md}></textarea>
<Markdown {md}>
	{#snippet h1(props)}
		{@const { children, style, class: className, ...rest } = props}
		<h1 style="color:red;{style}" class="{className} heading" {...rest}>
			{@render children?.()}
		</h1>
	{/snippet}
</Markdown>

<style>
	.heading {
		border-bottom: 1px solid #999;
	}
</style>
