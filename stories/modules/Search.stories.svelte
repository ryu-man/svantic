<script>
    import { Meta, Story } from '@storybook/addon-svelte-csf'
    import Search from '../../src/lib/modules/search'
  
    /**
     * @type {Search}
     */
    let controller
  </script>
  
  <Meta title="Modules/Search" component="{Search}" />
  
  <Story name="Solo" let:args>
    <Search {...args} bind:this="{controller}" />
  </Story>
  