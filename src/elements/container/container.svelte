<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/container.min.css'
  import { css, register, classNames } from '../../utils'

  let _class = ''
  export { _class as class }
  export let style = {}
  export let aligned
  export let fluid = false
  export let justified = false
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
  class="{classNames(_class, 'ui', { justified, fluid, aligned }, 'container')}"
>
  <slot />
</div>
