<script module>
	import type { SvelteHTMLElements } from 'svelte/elements';
	export { pBlue, pRed };
</script>

<script lang="ts">
</script>

{#snippet pRed(props: SvelteHTMLElements['p'])}
	{@const { children, style, ...rest } = props}
	<p class="color:red;{style}" {...rest}>{@render children?.()}</p>
{/snippet}

{#snippet pBlue(props: SvelteHTMLElements['p'])}
	{@const { children, style, ...rest } = props}
	<p class="color:blue;{style}" {...rest}>{@render children?.()}</p>
{/snippet}
