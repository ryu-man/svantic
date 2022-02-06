<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Checkbox from '../../src/lib/modules/checkbox';
	import JQuery from '../../src/lib/common/JQuery.svelte';
</script>

<Meta title="Modules/Checkbox" component={Checkbox} argTypes={{}} />

<Story name="Primary" args={{}} let:args>
	<JQuery>
		<Checkbox {...args}>
			<label>Make my profile visible</label>
		</Checkbox>
	</JQuery>
</Story>
