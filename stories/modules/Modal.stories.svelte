<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import { Centerize } from '../components'
  import * as Modal from '../../src/lib/modules/modal'
  import Button from '../../src/lib/elements/button'
  import Icon from '../../src/lib/elements/icon'

  /**
   * @type {Modal.default}
   */
  let controller
</script>

<Meta title="Modules/Modal" component="{Modal.default}" />

<Centerize>
  <Template let:args>
    <Modal.default {...args} bind:this="{controller}">
      <Modal.Header icon>
        <Icon name="close" />
        Archive Old Messages
      </Modal.Header>
      <Modal.Content>
        <p>
          Your inbox is getting full, would you like us to enable automatic
          archiving of old messages?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button>No</Button>
        <Button>Yes</Button>
      </Modal.Actions>
    </Modal.default>

    <Button
      on:click="{() => {
        controller.show()
      }}">Open Modal</Button
    >
  </Template>
</Centerize>

<Story name="Primary" />
