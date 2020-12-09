<script lang="ts">
  import { css } from '../../utils/css'

  import { register } from '../../utils/events'
  import Controller from './controller'

  let _class = ''
  export { _class as class }
  export let style = {}
  export let data = {}
  export let on = {}
  export let onmount = (controller: Controller) => {}

  let _data = {
    source: '',
    id: '',
    placeholder: '',
    ...data
  }

  function init(node: HTMLElement) {
    const unregister = register(node, on)
    let controller = new Controller(node)
    onmount(controller)
    return {
      update() {},
      destroy() {
        unregister()
        console.log('Button has been destroyed')
        controller = null
      }
    }
  }
</script>

<div
  use:init
  use:css="{style}"
  class="{_class} ui embed"
  data-source="{_data.source}"
  data-id="{_data.id}"
  data-placeholder="{_data.placeholder}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style>
  /* @import './embed.css';*/
</style>
