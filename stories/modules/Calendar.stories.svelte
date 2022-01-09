<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Calendar from '../../src/modules/calendar'
  import { Centerize } from '../components'

</script>

<Meta title="Modules/Calendar" component="{Calendar}" argTypes="{{}}" />

<Centerize>
  <Template let:args>
    <Calendar {...args}/>
  </Template>
</Centerize>

<Story
  name="Primary"
  argTypes="{{
    settings: {
      control: {
        type: 'raw'
      }
    }
  }}"
  args="{{}}"
/>
