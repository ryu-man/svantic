<script>
  import '../../../fomantic/dist/components/sidebar.css'
  import { css, register, classNames } from '../../utils'
  import Controller from './controller'

  let _class = ''
  export { _class as class }
  export let type = ''
  export let wide = ''
  export let state = ''
  export let direction = ''
  export let inverted = false
  export let vertical = false
  export let style = {}
  export let on = {}

  export let onMount
  function init(node, _params) {
    // the node has been mounted in the DOM
    css(node, style)
    const unregister = register(node, on)
    let controller = new Controller(node)
    onMount?.(controller)
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
  class:inverted
  class:vertical
  class="{classNames(state, type, direction, [wide, 'wide'], 'ui sidebar', _class)}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
