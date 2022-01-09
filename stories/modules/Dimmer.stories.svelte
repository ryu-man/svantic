<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import Dimmer from '../../src/modules/dimmer'
    // import Dimmer from '../../src/modules/dimmer'
  </script>
  
  <Meta title="Modules/Dimmer" component="{Dimmer}" argTypes="{{}}" />
  
  <Template let:args>
    <Dimmer {...args}>
      <Tabs.Tab title="Tab 1" data="one" active attached="bottom">
        <h1>Tab 1 content</h1>
      </Tabs.Tab>
      <Tabs.Tab title="Tab 2" data="two" attached="bottom">
        <h1>Tab 2 content</h1>
      </Tabs.Tab>
    </Dimmer>
  </Template>
  
  <Story
    name="Primary"
    args="{{
      
    }}"
  />
  