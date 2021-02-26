<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/sticky.min.css'
  import Controller from './controller'
  import { classNames, css } from '../../utils'

  let _class
  export { _class as class }
  export let style
  export let settings = {}
  export let onMount

  function module(node, settings) {
    const controller = new Controller(node, settings)
    onMount?.(controller)

    return {
      // the node has been removed from the DOM
      destroy() {
        controller.destroy()
        controller = null
      }
    }
  }
</script>

<div
  use:css="{style}"
  use:module="{settings}"
  class="{classNames(_class, 'ui sticky')}"
>
  <slot />
</div>
