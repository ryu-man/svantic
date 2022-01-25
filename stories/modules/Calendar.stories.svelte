<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Calendar from '../../src/lib/modules/calendar'
  import { Centerize } from '../components'
	import JQuery from '../../src/lib/common/JQuery.svelte';

</script>

<Meta title="Modules/Calendar" component="{Calendar}" argTypes="{{}}" />

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
  let:args
>
  <JQuery>
    <Calendar {...args}/>
  </JQuery>
</Story>
