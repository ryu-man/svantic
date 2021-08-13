<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import { Form, Fields, Field } from '../../src/collections'

</script>

<Meta
  title="Example/Form"
  component="{Form}"
  argTypes="{{
    label: { control: 'text' },
    primary: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    },
    onClick: { action: 'onClick' }
  }}"
/>

<Template let:args>
  <Form {...args} on:click="{args.onClick}" />
</Template>

<Story
  name="Primary"
  args="{{
    primary: true,
    label: 'Button'
  }}"
/>

<Story
  name="Secondary"
  args="{{
    label: 'Button'
  }}"
/>
<Story
  name="Large"
  args="{{
    size: 'large',
    label: 'Button'
  }}"
/>

<Story
  name="Small"
  args="{{
    size: 'small',
    label: 'Button'
  }}"
/>
