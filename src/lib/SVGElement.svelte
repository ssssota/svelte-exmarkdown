<svelte:options namespace="svg" />

<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		__tag: string;
		children?: Snippet<[]>;
	};
	let { __tag, children, ...restProps }: Props = $props();
</script>

<svelte:element this={__tag} {...restProps}
	>{@render children?.()}</svelte:element
>
