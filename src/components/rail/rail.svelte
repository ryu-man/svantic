<script lang="ts">
  import { css } from '../../utils/css'
  import { register } from '../../utils/events'

  let _class = ''
  export let side = ''
  export let internal = false
  export let dividing = false
  export let attached = false
  export let close = false
  export let style: {} = {}
  export let on: {} = {}
  export { _class as class }
  function init(node: HTMLElement, params?: {}) {
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
  class=" ui rail {_class} {side}"
  class:internal
  class:dividing
  class:attached
  class:close
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
<style global>
  @import '../../../fomantic/dist/components/rail.css';
</style>
