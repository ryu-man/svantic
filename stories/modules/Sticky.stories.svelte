<script>
    import { Meta, Story } from '@storybook/addon-svelte-csf'
    import Sticky from '../../src/lib/modules/sticky'
  
    /**
     * @type {Sticky}
     */
    let controller
  </script>
  
  <Meta title="Modules/Sticky" component="{Sticky}" />
  
  <Story name="Solo" let:args>
    <Sticky {...args} bind:this="{controller}" />
  </Story>
  