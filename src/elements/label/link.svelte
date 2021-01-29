<script>
  import { register, css, classNames } from '../../utils'

  export let type = ''
  export let attached = ''
  export let aligned = ''
  export let color = ''
  export let size = ''
  export let basic = false
  export let horizontal = false
  export let floating = false
  export let circular = false
  export let inverted = false
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

<!-- svelte-ignore a11y-missing-attribute -->
<a
  use:init
  class:attached
  class:basic
  class:horizontal
  class:floating
  class:aligned
  class:circular
  class:inverted
  class="{classNames(size, color, [attached, 'attached'], [floating, 'floating'], [aligned, 'aligned'], type, 'ui label', _class)}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</a>
