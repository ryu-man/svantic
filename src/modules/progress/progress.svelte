<script>
  import '../../../fomantic/dist/components/progress.css'
  import { classNames,css } from '../../utils'
  import Controller from './controller'

  let _class = ''
  export { _class as class }
  export let type
  export let attached
  export let speed
  export let state
  export let size
  export let color
  export let value = 0
  export let total = 100
  export let inverted = false
  export let style = {}
  export let onMount

  function init(node, params) {
    // the node has been mounted in the DOM
    css(node, style)
    let controller = new Controller(node)
    onMount?.(controller)
    return {
      // the node has been removed from the DOM
      destroy() {
        controller = null
      }
    }
  }
</script>

<div
  use:init
  data-value="{value}"
  data-total="{total}"
  class:inverted
  class="{classNames(type, speed, state, size, color, [attached, 'attached'], 'ui progress', _class)}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
