<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Centerize } from '../components';
	import * as Dropdown from '../../src/lib/modules/dropdown';
	import { Icon } from '../../src/lib/elements';
	import JQuery from '../../src/lib/common/JQuery.svelte';
</script>

<Meta title="Modules/Dropdown" component={Dropdown} argTypes={{}} />

<Centerize>
	<Story name="dropdown">
		<JQuery>
			<Dropdown.default selection>
				<Icon name="dropdown" />
				<Dropdown.Text>Select a language</Dropdown.Text>
				<Dropdown.Menu>
					<Dropdown.Item>English</Dropdown.Item>
					<Dropdown.Item>Arabic</Dropdown.Item>
					<Dropdown.Item>Spanish</Dropdown.Item>
					<Dropdown.Item>German</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown.default>
		</JQuery>
	</Story>
</Centerize>

<style>
	:global(#root) {
		height: 100%;
	}
</style>
