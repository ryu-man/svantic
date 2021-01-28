<script>
  import '../../../fomantic/dist/components/progress'
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
  export let settings = {}
  export let onMount

  function init(node, settings) {
    // the node has been mounted in the DOM
    css(node, style)
    let controller = new Controller(node, settings)
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
  use:init={settings}
  data-value="{value}"
  data-total="{total}"
  class:inverted
  class="{classNames(type, speed, state, size, color, [attached, 'attached'], 'ui progress', _class)}"
>
  <slot/>
</div>
