<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import { Centerize } from '../components'
  import * as Dropdown from '../../src/modules/dropdown'
  import { Icon } from '../../src/elements'
</script>

<Meta title="Modules/Dropdown" component="{Dropdown}" argTypes="{{}}" />

<Centerize>
  <Template let:args>
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
  </Template>
</Centerize>

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

<style>
  :global(#root) {
    height: 100%;
  }
</style>
