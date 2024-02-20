<svelte:options runes={false} />

<script lang="ts">
	import Markdown from '$lib';
	let md = '';
	const id = 'input';
</script>

<textarea bind:value={md} {id} />
<output for={id}><Markdown {md} /></output>
