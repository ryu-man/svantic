<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import { Input } from '../../src/elements'

</script>

<Meta
  title="Elements/Input"
  component="{Input}"
  argTypes="{{
    class: { control: { type: 'text' } },
    style: { control: { type: 'object' } },
    color: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'red',
          'orange',
          'teal',
          'blue',
          'violet',
          'purple',
          'pink',
          'brown',
          'grey',
          'black'
        ]
      }
    },
    state: {
      control: {
        type: 'select',
        options: ['focus', 'loading', 'disabled', 'error', '']
      }
    },
    speed: { control: { type: 'select', options: ['slow', 'fast'] } },
    size: {
      control: {
        type: 'select',
        options: [
          'mini',
          'tiny',
          'small',
          'meduim',
          'large',
          'big',
          'huge',
          'massive'
        ]
      }
    },
    icon: { control: { type: 'text' } },
    labeled: { control: { type: 'select', options: ['left', 'right'] } },
    action: { control: { type: 'select', options: ['left', 'right'] } },
    animation: { control: { type: 'select', options: ['elastic', 'double'] } },
    basic: { control: { type: 'boolean' } },
    fluid: { control: { type: 'boolean' } },
    corner: { control: { type: 'boolean' } },
    inverted: { control: { type: 'boolean' } },
    transparent: { control: { type: 'boolean' } }
  }}"
/>

<Template let:args>
  <Input {...args} on:click="{args.onClick}"></Input>
</Template>

<Story
  name="Normal"
  args="{{
    primary: true
  }}"
/>
