<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import * as Tabs from '../../src/modules/tab'
  import { Icon } from '../../src/elements'
</script>

<Meta title="Modules/Tabs" component="{Tabs.default}" argTypes="{{}}" />

<Template let:args>
  <!-- <TabMenu selection {...args} /> -->
  <Tabs.default {...args}>
    <Tabs.Tab title="Hello" data="one" active attached="bottom">
      <h1>World!</h1>
    </Tabs.Tab>
    <Tabs.Tab title="2nd tab" data="two"  attached="bottom">
      <h1>JavaScript is the best</h1>
    </Tabs.Tab>
  </Tabs.default>
</Template>

<Story
  name="Primary"
  args="{{
    primary: true
  }}"
/>
