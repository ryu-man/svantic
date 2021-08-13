<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import { Dropdown } from '../../src/modules'
  import { Icon } from '../../src/elements'
  import Centerize from '../Centerize.svelte'

  console.log(Dropdown)
</script>

<Meta title="Modules/Dropdown" component="{Dropdown}" argTypes="{{}}" />

<Template let:args>
  <Centerize>
    <Dropdown.default selection {...args}>
      <Icon name="dropdown" />
      <Dropdown.Text>Select a language</Dropdown.Text>
      <Dropdown.Menu>
        <Dropdown.Item>English</Dropdown.Item>
        <Dropdown.Item>Arabic</Dropdown.Item>
        <Dropdown.Item>Spanish</Dropdown.Item>
        <Dropdown.Item>German</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown.default>
  </Centerize>
</Template>

<Story
  name="Primary"
  args="{{
    primary: true
  }}"
/>
<Story
  name="Secondary"
  args="{{
    secondary: true
  }}"
/>
<Story
  name="Tertiary"
  args="{{
    tertiary: true
  }}"
/>
