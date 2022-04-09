import { writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

/**
 * @param {string} str
 * @returns {string}
 */
const upperFirst = (str) => {
	const [first, ...rest] = [...str];
	return first.toUpperCase() + rest.join('');
};

const dir = join(fileURLToPath(import.meta.url), '../../src/lib/renderer/html');
const tagNamesHaveChildren = [
	'h1',
	'h2',
	'h3',
	'h4',
	'h5',
	'h6',
	'p',
	'ul',
	'ol',
	'li',
	'a',
	'strong',
	'em',
	'code',
	'pre',
	'blockquote'
];
const tagNamesHaveNoChild = ['input', 'hr', 'br'];
const upperFirstTagNames = tagNamesHaveChildren
	.map(upperFirst)
	.concat(tagNamesHaveNoChild.map(upperFirst));

tagNamesHaveChildren.map((tagName) =>
	writeFileSync(
		join(dir, `${upperFirst(tagName)}.svelte`),
		`<script lang="ts">
	import type { Node } from '$lib/types';
	import Children from '../Children.svelte';
	export let children: Node[];
	export let properties: Record<string, unknown>;
</script>
${tagName === 'a' ? '\n<!-- svelte-ignore a11y-missing-attribute -->' : ''}
<${tagName} {...properties}><Children {children} /></${tagName}>
`
	)
);
tagNamesHaveNoChild.map((tagName) =>
	writeFileSync(
		join(dir, `${upperFirst(tagName)}.svelte`),
		`<script lang="ts">
	export let properties: Record<string, unknown>;
</script>

<${tagName} {...properties} />
`
	)
);

writeFileSync(
	join(dir, 'index.ts'),
	`${upperFirstTagNames
		.map((tagName) => `import ${tagName} from './${tagName}.svelte';`)
		.join('\n')}
const htmlComponents = {
	${tagNamesHaveChildren.map((tagName) => `${tagName}: ${upperFirst(tagName)}`).join(',\n	')},
	${tagNamesHaveNoChild.map((tagName) => `${tagName}: ${upperFirst(tagName)}`).join(',\n	')}
};
export {
	${upperFirstTagNames.join(',\n	')}
};
export default htmlComponents;
`
);
