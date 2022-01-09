<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Grid, { Column, Row } from '../../src/collections/grid'
  import Icon from '../../src/elements/icon'
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
