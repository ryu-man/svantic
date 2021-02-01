<script>
  import '../../../semantic/dist/components/rail.css'
  import { css, register } from '../../utils'

  let _class = ''
  export { _class as class }
  export let side = ''
  export let internal = false
  export let dividing = false
  export let attached = false
  export let close = false
  export let style= {}
  export let on= {}

  function init(node) {
    // the node has been mounted in the DOM
    css(node, style)
    const unregister = register(node, on)

    return {
      // the node has been removed from the DOM
      destroy() {
        unregister()
      }
    }
  }
</script>

<div
  use:init
  class:internal
  class:dividing
  class:attached
  class:close
  class=" {side} ui rail {_class}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
