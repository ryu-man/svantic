<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Slider from '../../src/lib/modules/slider'
	import JQuery from '../../src/lib/common/JQuery.svelte';

  /**
   * @type {Slider}
   */
  let controller
</script>

<Meta title="Modules/Slider" component="{Slider}" />

<Story name="Solo" let:args>
  <JQuery>
    <Slider {...args} bind:this="{controller}" />
  </JQuery>
</Story>
