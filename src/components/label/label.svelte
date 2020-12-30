<script>
  import { css, register, classNames } from '../../utils'

  export let type = ''
  export let attached = ''
  export let aligned = ''
  export let color = ''
  export let size = ''
  export let horizontal = false
  export let floating = false
  export let circular = false
  export let inverted = false
  export let basic = false
  export let on = {}
  export let style = {}
  let _class = ''
  export { _class as class }

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
  class:basic
  class:floating
  class:horizontal
  class:circular
  class:inverted
  class="{classNames(size, color, [attached, 'attached'], [aligned, 'aligned'], type, 'ui label', _class)}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style global>
  @import '../../../fomantic/dist/components/label.css';
</style>
