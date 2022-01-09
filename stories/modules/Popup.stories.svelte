<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Popup, { Header, Body } from '../../src/lib/modules/popup'
  import Button from '../../src/lib/elements/button'
  import { Centerize } from '../components'

  /**
   * @type {Popup}
   */
  let controller
</script>

<Meta title="Modules/Popup" component="{Popup}" />

<Centerize>
  <Story name="Solo" let:args>
    <Popup {...args} let:popup>
      <Button onMount="{popup}">Click me</Button>
      <Body>
        <Header>Notice</Header>
        This is just a random text !
      </Body>
    </Popup>
  </Story>
</Centerize>
