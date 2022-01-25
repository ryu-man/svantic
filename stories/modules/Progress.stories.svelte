<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import * as Progress from '../../src/lib/modules/progress';
	import { Centerize } from '../components';
	import JQuery from '../../src/lib/common/JQuery.svelte';

	/**
	 * @type {Progress.default}
	 */
	let controller;
</script>

<Meta title="Modules/Progress" component={Progress.default} />

<Centerize>
	<Story name="Solo" args={{ total: 100, value: 50 }} let:args>
		<JQuery>
			<Progress.default {...args} bind:this={controller}>
				<Progress.Bar />
			</Progress.default>
		</JQuery>
	</Story>

	<Story name="Multiple" args={{ total: 100, value: 50 }} let:args>
		<JQuery>
			<Progress.Multiple {...args} bind:this={controller}>
				<Progress.Bar />
			</Progress.Multiple>
		</JQuery>
	</Story>

	<Story name="Labeled" args={{ total: 100, value: 50 }} let:args>
		<JQuery>
			<Progress.default {...args} bind:this={controller}>
				<Progress.Bar />
				<Progress.Label>Upload</Progress.Label>
			</Progress.default>
		</JQuery>
	</Story>
</Centerize>

<style>
	:global(.ui.progress) {
		width: 90vw;
	}
</style>
