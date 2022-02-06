<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Grid, { Column, Row } from '../../src/lib/collections/grid'
  import Icon from '../../src/lib/elements/icon'
</script>

<Meta
  title="Colections/Grid"
  component="{Grid}"
  argTypes="{{}}"
/>

<Story name="grid" args="{{}}" let:args >
  <Grid>

  </Grid>
</Story>
