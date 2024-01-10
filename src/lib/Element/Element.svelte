<script lang="ts">
	import ElementSvg from './ElementSVG.svelte';
	export let component: string;
</script>

{#if component === 'svg' || component === 'path'}
	<ElementSvg {component} {...$$restProps}><slot /></ElementSvg>
{:else}
	<svelte:element this={component} {...$$restProps}>
		<slot />
	</svelte:element>
{/if}
