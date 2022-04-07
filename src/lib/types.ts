import type { SvelteComponent } from "svelte";
import type { Plugin as UnifiedPlugin } from "unified"

export type ComponentsMap = Record<string, typeof SvelteComponent>;
export type Plugin = {
  remarkPlugin?: UnifiedPlugin;
  renderer?: ComponentsMap;
}
