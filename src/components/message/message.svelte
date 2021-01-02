<script>
  import '../../../fomantic/dist/components/message.css'
  import { classNames, css, register } from '../../utils'

  export let type = ''
  export let size = ''
  export let state = ''
  export let context = ''
  export let attached = ''
  export let compact = false
  export let floating = false
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
  class:compact
  class:floating
  class="{classNames(type, context, state, size, [attached, 'attached'], 'ui message', _class)}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
