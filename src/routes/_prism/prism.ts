import { highlight, languages as langs } from 'prismjs';
import 'prism-svelte';

export const languages = langs ?? {};
export { highlight };
