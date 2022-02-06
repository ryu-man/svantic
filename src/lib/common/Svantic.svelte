<script>
	/** Load global stylesheets */
	import '../semantic/dist/components/site.min.css';
	import '../semantic/dist/components/reset.min.css';

	import { onMount } from 'svelte';

	export let jquery = true;

	const ready = new Promise((resolve) => {
		onMount(async () => {
			if (jquery) {
				await import('jquery').then((jq) => {
					window['jQuery'] = jq.default;
					window['$'] = jq.default;
				});
			}
			resolve();
		});
	});
</script>

{#await ready then _}
	<slot />
{/await}
