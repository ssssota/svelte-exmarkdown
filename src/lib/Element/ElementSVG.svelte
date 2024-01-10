<svelte:options namespace="svg" />

<script lang="ts">
	export let component: string;
</script>

<svelte:element this={component} {...$$restProps}>
	<slot />
</svelte:element>
