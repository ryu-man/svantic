<script>
    import { Meta, Story } from '@storybook/addon-svelte-csf'
    import Rating from '../../src/lib/modules/rating'
  	import JQuery from '../../src/lib/common/JQuery.svelte';

    /**
     * @type {Rating}
     */
    let controller
  </script>
  
  <Meta title="Modules/Rating" component="{Rating}" />
  
  <Story name="Solo" let:args>
    <JQuery>
      <Rating {...args} bind:this="{controller}" />
    </JQuery>
  </Story>
  