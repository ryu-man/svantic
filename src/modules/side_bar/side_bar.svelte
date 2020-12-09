<script lang="ts">
  import { css } from '../../utils/css'
  import { register } from '../../utils/events'
  import Controller from './controller'

  let _class: string = ''
  export let type: string = ''
  export let wide: string = ''
  export let state: string = ''
  export let direction: string = ''
  export let inverted: boolean = false
  export let vertical: boolean = false
  export let style: {} = {}
  export let on: {} = {}

  export let onmount = (_controller: Controller) => {}
  function init(node: HTMLElement, _params?: {}) {
    // the node has been mounted in the DOM
    css(node, style)
    const unregister = register(node, on)
    let controller = new Controller(node)
    onmount(controller)
    return {
      // the node has been removed from the DOM
      destroy() {
        unregister()
        controller = null
      }
    }
  }
</script>

<div
  use:init
  class="{_class} {type} {wide + ' wide'} {direction} {state} ui sidebar"
  class:inverted
  class:vertical
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style global>
  @import '../../../fomantic/dist/components/sidebar.css';
</style>
