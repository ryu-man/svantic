<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/slider.min.css'
  import { css, register, classNames } from '../../utils'
  import Controller from './controller'

  let _class
  export { _class as class }
  export let type = ''
  export let size = ''
  export let state = ''
  export let color = ''
  export let inverted = false
  export let reversed = false
  export let vertical = false
  export let on = {}
  export let style
  export let settings = {}
  export let onMount
  function module(node, settings) {
    css(node, style)

    const unregister = register(node, on)

    let controller = new Controller(node, settings)
    onMount?.(controller, node)

    return {
      destroy() {
        unregister()
        controller.destroy()
        controller = null
      }
    }
  }
</script>

<div
  use:module="{settings}"
  class:inverted
  class:reversed
  class:vertical
  class="{classNames(state, color, size, type, 'ui slide', _class)}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
