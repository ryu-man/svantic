<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import Embed from '../../src/lib/modules/embed';
	import JQuery from '../../src/lib/common/JQuery.svelte';

	/**
	 * @type {Embed}
	 */
	let controller;
</script>

<Meta title="Modules/Embed" component={Embed} />

<Story name="Solo" let:args>
	<JQuery>
		<Embed {...args} bind:this={controller} />
	</JQuery>
</Story>
