<script>
  import { classNames, css, register } from '../../utils'

  let _class = ''
  export let type = ''
  export let state = ''
  export let floated = ''
  export let attached = ''
  export let aligned = ''
  export let color = ''
  export let emphasis = ''
  export let tall = false
  export let double = false
  export let inverted = false
  export let padded = false
  export let fitted = false
  export let compact = false
  export let circular = false
  export let clearing = false
  export let basic = false
  export let blurring = false
  export let dimmable = false
  export let dimmed = false
  export let container = false
  export let vertical  = false
  export let style = {}
  export let on = {}
  export { _class as class }

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
  class:tall
  class:double
  class:inverted
  class:padded
  class:fitted
  class:compact
  class:circular
  class:clearing
  class:basic
  class:blurring
  class:dimmable
  class:dimmed
  class:vertical
  class="{classNames(state, color, emphasis, type, [floated, 'floated'], [attached, 'attached'], [aligned, 'aligned'], 'ui segment', _class)}"
  class:container
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
