import * as P from 'prismjs';
import 'prism-svelte';
export const Prism = (P as unknown as { default: typeof P }).default;
export default Prism;
