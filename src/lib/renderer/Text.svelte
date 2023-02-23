<script lang="ts">
	export let value = '';

	export let type: unknown = undefined;
	export let position: unknown = undefined;
	export let __index: unknown = undefined;
	// HACK: ignore `unused-export-let`
	type && position && __index;
</script>

{value}
