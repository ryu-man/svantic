<script>
  import '../../../fomantic/dist/components/rail.css'
  import { css, register, classNames } from '../../utils'

  let _class = ''
  export { _class as class }
  export let side
  export let internal
  export let dividing
  export let attached
  export let close
  export let size
  export let style = {}
  export let on = {}

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
  class:dividing
  class:attached
  class:close
  class="{classNames(
    side,
    [internal, 'internal'],
    [dividing, 'dividing'],
    [attached, 'attached'],
    [close, 'close'],
    size,
    _class,
    'ui rail'
  )}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
