<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import { Centerize } from '../components'
  import * as Button from '../../src/elements/button'
</script>

<Meta
  title="Elements/Button"
  component="{Button}"
  argTypes="{{
    size: {
      control: 'select',
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
    },
    color: {
      control: 'select',
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
    },
    state: { control: 'select', options: ['active', 'disabled', 'loading'] },
    social: {
      control: 'select',
      options: [
        'youtube',
        'instagram',
        'linkedin',
        'vk',
        'google',
        'twitter',
        'facebook'
      ]
    },
    floated: { control: 'select', options: ['left', 'right'] },
    labeled: { control: 'select', options: ['left', 'right', true, false] },
    attached: {
      control: 'select',
      options: [true, false, 'left', 'right', 'top', 'bottom']
    },
    animated: { control: 'select', options: [true, 'fade', 'vertical'] },
    icon: { control: 'text' },
    fluid: { control: 'boolean' },
    toggle: { control: 'boolean' },
    compact: { control: 'boolean' },
    positive: { control: 'boolean' },
    negative: { control: 'boolean' },
    inverted: { control: 'boolean' },
    circular: { control: 'boolean' },
    basic: { control: 'boolean' },
    primary: { control: 'boolean' },
    secondary: { control: 'boolean' },
    tertiary: { control: 'boolean' },
    disable: { control: 'boolean' },
    loading: { control: 'boolean' },
    tabIndex: { control: 'number' },
    as: { control: 'select', options: ['div', 'button'] }
  }}"
/>

<Centerize>
  <Template let:args>
    <Button.default {...args} on:click="{args.onClick}">
      {#if args.animated}
        <Button.Content hidden>
          {args.animated}
        </Button.Content>

        <Button.Content>
          {' Click me ! '}
        </Button.Content>
      {:else}
        {' Click me ! '}
      {/if}
    </Button.default>
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

<Story
  name="Animated"
  args="{{
    animated: 'fade'
  }}"
  let:args
>
  <Button.default {...args}>
    <Button.Content>Hello</Button.Content>
    <Button.Content hidden>World</Button.Content>
  </Button.default>
</Story>

<style>
  :global(#root) {
    height: 100%;
  }
</style>
