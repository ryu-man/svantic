<script lang="ts">
  import { css } from '../../utils/css'
  import { register } from '../../utils/events'
  import Controller from './controller'

  let _class = ''
  export let type = ''
  export let size = ''
  export let state = ''
  export let color = ''
  export let inverted = false
  export let reversed = false
  export let vertical = false
  export let on = {}
  export let style = {}
  export { _class as class }

  export let onmount = (controller: Controller) => {}
  function init(node: HTMLElement, params?: {}) {
    css(node, style)
    const unregister = register(node, on)
    let controller = new Controller(node)
    onmount(controller)
    return {
      destroy() {
        unregister()
        controller = null
      }
    }
  }
</script>

<div
  use:init
  class="{_class} {type} {color} {size} {state} ui slider"
  class:inverted
  class:reversed
  class:vertical
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style global>
  @import '../../../fomantic/dist/components/slider.css';
</style>
