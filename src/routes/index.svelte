<script lang="ts">
	import ExtensibleSvelteMarkdown from '$lib';
	let input = `
# test

hello

|col1|col2|
|----|----|
|test|test|
|abcd|efgh|
`;
</script>

<textarea bind:value={input} />

<ExtensibleSvelteMarkdown {input} />
