<script lang="ts">
	import { classNameTransform } from '../../utils';
	export let properties: Record<string, unknown>;
</script>

<br {...classNameTransform(properties)} />
