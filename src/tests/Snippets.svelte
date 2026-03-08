<script module>
	import type { SvelteHTMLElements } from 'svelte/elements';
	export { pBlue, pRed };
</script>

<script lang="ts">
</script>

{#snippet pRed(props: SvelteHTMLElements['p'])}
	{@const { children, ...rest } = props}
	<p {...rest} class="color:red;{rest.class}">{@render children?.()}</p>
{/snippet}

{#snippet pBlue(props: SvelteHTMLElements['p'])}
	{@const { children, ...rest } = props}
	<p {...rest} class="color:blue;{rest.class}">{@render children?.()}</p>
{/snippet}
