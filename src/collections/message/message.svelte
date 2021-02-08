<script>
  import '../../../semantic/dist/components/message.css'
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
  class="{classNames(
    _class,
    'ui',
    type,
    context,
    state,
    size,
    { compact, floating, attached },
    'message'
  )}"
>
  <slot />
</div>
