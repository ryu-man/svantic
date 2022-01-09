<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Embed from '../../src/lib/modules/embed'

  /**
   * @type {Embed}
   */
  let controller
</script>

<Meta title="Modules/Embed" component="{Embed}" />

<Story name="Solo" let:args>
  <Embed {...args} bind:this="{controller}" />
</Story>
