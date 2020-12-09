<script lang="ts">
  import { css } from '../../utils/css'
  import { register } from '../../utils/events'

  let _class: string = ''
  export let fluid: boolean = false
  export let styled: boolean = false
  export let inverted: boolean = false
  export let style = {}
  export let on: {} = {}

  export let onmount: (controller: Controller) => void = (_) => {}

  function init(node: HTMLElement, params?: {}) {
    // the node has been mounted in the DOM
    css(node, style)
    const unregister = register(node, on)
    // let controller = new Controller(node)
    // onmount(controller)
    return {
      // the node has been removed from the DOM
      destroy() {
        unregister()
        // controller = null
      }
    }
  }
</script>

<div
  use:init
  class="{_class} ui accordion"
  class:styled
  class:fluid
  class:inverted
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style>
  /* @import './accordion.css'; */
</style>
