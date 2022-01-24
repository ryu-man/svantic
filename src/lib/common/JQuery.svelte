<script>
	const isReady = import('jquery').then((jq) => {
		window['jQuery'] = jq.default;
		window['$'] = jq.default;
	});
</script>

{#await isReady then _}
	<slot />
{/await}
