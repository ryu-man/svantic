<script>
    import { Meta, Story } from '@storybook/addon-svelte-csf'
    import Search from '../../src/lib/modules/search'
  	import JQuery from '../../src/lib/common/JQuery.svelte';

    /**
     * @type {Search}
     */
    let controller
  </script>
  
  <Meta title="Modules/Search" component="{Search}" />
  
  <Story name="Solo" let:args>
    <JQuery>
      <Search {...args} bind:this="{controller}" />
    </JQuery>
  </Story>
  