<script lang="ts">
	export let lang: string | null = null;
	export let meta: string | null = null;
	export let value = '';
</script>

<pre><code class={lang !== null ? `language-${lang}` : ''}>{value.trim()}</code></pre>
