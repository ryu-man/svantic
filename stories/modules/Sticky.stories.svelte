<script>
    import { Meta, Story } from '@storybook/addon-svelte-csf'
    import Sticky from '../../src/lib/modules/sticky'
  	import JQuery from '../../src/lib/common/JQuery.svelte';

    /**
     * @type {Sticky}
     */
    let controller
  </script>
  
  <Meta title="Modules/Sticky" component="{Sticky}" />
  
  <Story name="Solo" let:args>
    <JQuery>
      <Sticky {...args} bind:this="{controller}" />
    
    </JQuery>
  </Story>
  