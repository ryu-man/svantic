<script>
    import { Meta, Story } from '@storybook/addon-svelte-csf'
    import Sidebar from '../../src/lib/modules/side_bar'
  	import JQuery from '../../src/lib/common/JQuery.svelte';

    /**
     * @type {Sidebar}
     */
    let controller
  </script>
  
  <Meta title="Modules/Sidebar" component="{Sidebar}" />
  
  <Story name="Solo" let:args>
    <JQuery>
      <Sidebar {...args} bind:this="{controller}" />
    </JQuery>
  </Story>
  