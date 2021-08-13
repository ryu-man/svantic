<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import { TabMenu } from '../../src/modules'
  import { Icon } from '../../src/elements'
</script>

<Meta title="Modules/Tab" component="{TabMenu}" argTypes="{{}}" />

<Template let:args>
  <!-- <TabMenu selection {...args} /> -->
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
