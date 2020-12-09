<script>
  import { css, register } from '../../utils'

  export let style = {}
  export let size = ''
  export let color = ''
  export let basic = false
  export let tag = false
  export let circular = false
  export let inverted = false
  let _class = ''
  export { _class as class }
  export let on = {}

  function init(node) {
    css(node, style)
    const unregister = register(node, on)

    return {
      destroy() {
        unregister()
      }
    }
  }
</script>

<div
  use:init
  class="{_class} {size} {color} ui labels"
  class:basic
  class:tag
  class:circular
  class:inverted
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style global>
  @import '../../../fomantic/dist/components/label.css';
</style>
