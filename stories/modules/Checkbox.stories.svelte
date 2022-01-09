<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Checkbox from '../../src/lib/modules/checkbox'
</script>

<Meta title="Modules/Checkbox" component="{Checkbox}" argTypes="{{}}" />

<Template let:args>
  <Checkbox {...args}>
    <label>Make my profile visible</label>
  </Checkbox>
</Template>

<Story name="Primary" args="{{}}" />
