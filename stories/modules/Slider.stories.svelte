<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Slider from '../../src/modules/slider'

  /**
   * @type {Slider}
   */
  let controller
</script>

<Meta title="Modules/Slider" component="{Slider}" />

<Story name="Solo" let:args>
  <Slider {...args} bind:this="{controller}" />
</Story>
