<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Toast from '../../src/lib/modules/toast'
  import Button from '../../src/lib/elements/button'

  /**
   * @type {Toast}
   */
  let controller
</script>

<Meta title="Modules/Toast" component="{Toast}" />

<Story name="Minimal" let:args>
  <Toast {...args} bind:this="{controller}">
    <div class="content">
      A Toast can be generated out of existing DOM Nodes
    </div>
  </Toast>
</Story>
<Story name="Titled" let:args>
  <Toast {...args} bind:this="{controller}">
    <div class="content">
      <div class="ui header">Notice</div>
      A Toast can be generated out of existing DOM Nodes
    </div>
  </Toast>
</Story>
<Story name="Progress bar" let:args>
  <Toast
    {...args}
    bind:this="{controller}"
    settings="{{ showProgress: "bottom", classProgress: 'red' }}"
  >
    <div class="content">
      <div class="ui header">Notice</div>
      A Toast can be generated out of existing DOM Nodes
    </div>
  </Toast>
</Story>
<Story name="Success" let:args>
  <Toast {...args} bind:this="{controller}" settings="{{ class: 'success' }}">
    <div class="content">You're using the good framework !</div>
  </Toast>
</Story>
<Story name="Error" let:args>
  <Toast {...args} bind:this="{controller}" settings="{{ class: 'error' }}">
    <div class="content">An error occurred !</div>
  </Toast>
</Story>
<Story name="Warning" let:args>
  <Toast  bind:this="{controller}" settings="{{ class: 'warning' }}" {...args}>
    <div class="content">Behind you !</div>
  </Toast>
</Story>

<Button
  on:click="{() => {
    console.log(controller.getRemainingTime())
  }}"
>
  Show Toast
</Button>
