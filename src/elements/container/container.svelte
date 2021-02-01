<script>
  import '../../../semantic/dist/components/container.css'
  import { css, register, classNames } from '../../utils'

  let _class = ''
  export { _class as class }
  export let style = {}
  export let aligned
  export let fluid = false
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
  class:fluid
  class="{classNames([aligned, 'aligned'], 'ui container', _class)}"
>
  <slot />
</div>
