<svelte:options namespace="svg" />

<script lang="ts">
	export let __tag: string;
</script>

<svelte:element this={__tag} {...$$restProps}><slot /></svelte:element>
