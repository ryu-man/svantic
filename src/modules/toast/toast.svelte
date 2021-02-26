<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/toast.min.css'
  import { classNames, css, register } from '../../utils'
  import Controller from './controller'

  let _class
  export { _class as class }
  export let type = 'toast'
  export let color = ''
  export let icon = false
  export let style
  export let on = {}
  export let settings = {}
  export let onMount

  function module(node, settings) {
    // the node has been mounted in the DOM
    css(node, style)

    const unregister = register(node, on)

    let controller = new Controller(node, settings)
    onMount?.(controller)

    return {
      // the node has been removed from the DOM
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
  class="{classNames(_class, 'ui', { icon }, color, type)}"
>
  <slot />
</div>
