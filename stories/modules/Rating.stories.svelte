<script>
    import { Meta, Story } from '@storybook/addon-svelte-csf'
    import Rating from '../../src/lib/modules/rating'
  
    /**
     * @type {Rating}
     */
    let controller
  </script>
  
  <Meta title="Modules/Rating" component="{Rating}" />
  
  <Story name="Solo" let:args>
    <Rating {...args} bind:this="{controller}" />
  </Story>
  