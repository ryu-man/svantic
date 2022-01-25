<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import * as Tabs from '../../src/lib/modules/tab';
	import JQuery from '../../src/lib/common/JQuery.svelte';
</script>

<Meta title="Modules/Tabs" component={Tabs.default} argTypes={{}} />

<Story name="Primary" args={{}} let:args>
	<JQuery>
		<Tabs.default {...args}>
			<Tabs.Tab title="Tab 1" data="one" active attached="bottom">
				<h1>Tab 1 content</h1>
			</Tabs.Tab>
			<Tabs.Tab title="Tab 2" data="two" attached="bottom">
				<h1>Tab 2 content</h1>
			</Tabs.Tab>
		</Tabs.default>
	</JQuery>
</Story>
