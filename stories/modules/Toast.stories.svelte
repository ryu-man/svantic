<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import Toast from '../../src/lib/modules/toast';
	import Button from '../../src/lib/elements/button';
	import JQuery from '../../src/lib/common/JQuery.svelte';

	/**
	 * @type {Toast}
	 */
	let controller;
</script>

<Meta title="Modules/Toast" component={Toast} />

<Story name="Minimal" let:args>
	<JQuery>
		<Toast {...args} bind:this={controller}>
			<div class="content">A Toast can be generated out of existing DOM Nodes</div>
		</Toast>
	</JQuery>
</Story>
<Story name="Titled" let:args>
	<JQuery>
		<Toast {...args} bind:this={controller}>
			<div class="content">
				<div class="ui header">Notice</div>
				A Toast can be generated out of existing DOM Nodes
			</div>
		</Toast>
	</JQuery>
</Story>
<Story name="Progress bar" let:args>
	<JQuery>
		<Toast
			{...args}
			bind:this={controller}
			settings={{ showProgress: 'bottom', classProgress: 'red' }}
		>
			<div class="content">
				<div class="ui header">Notice</div>
				A Toast can be generated out of existing DOM Nodes
			</div>
		</Toast>
	</JQuery>
</Story>
<Story name="Success" let:args>
	<JQuery>
		<Toast {...args} bind:this={controller} settings={{ class: 'success' }}>
			<div class="content">You're using the good framework !</div>
		</Toast>
	</JQuery>
</Story>
<Story name="Error" let:args>
	<JQuery>
		<Toast {...args} bind:this={controller} settings={{ class: 'error' }}>
			<div class="content">An error occurred !</div>
		</Toast>
	</JQuery>
</Story>
<Story name="Warning" let:args>
	<JQuery>
		<Toast bind:this={controller} settings={{ class: 'warning' }} {...args}>
			<div class="content">Behind you !</div>
		</Toast>
	</JQuery>
</Story>

<Button
	on:click={() => {
		console.log(controller.getRemainingTime());
	}}
>
	Show Toast
</Button>
