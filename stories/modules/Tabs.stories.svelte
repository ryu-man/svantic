<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import * as Tabs from '../../src/lib/modules/tab'
</script>

<Meta title="Modules/Tabs" component="{Tabs.default}" argTypes="{{}}" />

<Template let:args>
  <Tabs.default {...args}>
    <Tabs.Tab title="Tab 1" data="one" active attached="bottom">
      <h1>Tab 1 content</h1>
    </Tabs.Tab>
    <Tabs.Tab title="Tab 2" data="two" attached="bottom">
      <h1>Tab 2 content</h1>
    </Tabs.Tab>
  </Tabs.default>
</Template>

<Story
  name="Primary"
  args="{{
    
  }}"
/>
