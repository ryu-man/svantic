<script>
	/** Load global stylesheets */
	import '../semantic/dist/components/site.css';
	import '../semantic/dist/components/reset.css';

	import { onMount } from 'svelte';

	export let jquery = import('jquery');

	const ready = new Promise((resolve) => {
		onMount(async () => {
			if (jquery) {
				await jquery.then((jq) => {
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
