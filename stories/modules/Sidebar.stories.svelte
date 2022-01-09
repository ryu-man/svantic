<script>
    import { Meta, Story } from '@storybook/addon-svelte-csf'
    import Sidebar from '../../src/lib/modules/side_bar'
  
    /**
     * @type {Sidebar}
     */
    let controller
  </script>
  
  <Meta title="Modules/Sidebar" component="{Sidebar}" />
  
  <Story name="Solo" let:args>
    <Sidebar {...args} bind:this="{controller}" />
  </Story>
  