<script lang="ts">
	import Markdown from '$lib';
	let md = $state('');
	const id = 'input';
</script>

<textarea bind:value={md} {id}></textarea>
<output for={id}><Markdown {md} /></output>
