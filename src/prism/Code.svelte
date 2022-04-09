<script lang="ts">
	import { classNameTransform } from '../lib/utils';
	import type { Node } from '$lib/types';
	import Children from '../lib/renderer/Children.svelte';
	import Prismjs from 'prismjs';
	import 'prism-svelte';
	export let children: Node[];
	export let properties: Record<string, unknown>;

	let lang: string | undefined;
	$: lang = String(classNameTransform(properties).class).match(/language-(\w+)/)?.[1];
	let child: any;
	$: child = children[0];
</script>

{#if lang == null || Prismjs.languages[lang] == null}<code {...classNameTransform(properties)}
		><Children {children} /></code
	>{:else}<code {...classNameTransform(properties)}
		>{@html Prismjs.highlight(child.value, Prismjs.languages[lang], lang)}</code
	>{/if}

<style>
	code {
		background-color: var(--background);
	}
</style>
