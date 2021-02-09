<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/popup.css'
  import { css, classNames } from '../../utils'
  import Controller from './controller'

  let _class = ''
  export { _class as class }
  export let style = {}
  export let settings = {}
  export let onMount

  function module(node, settings) {
    css(node, style)
    let controller = new Controller(node, settings)
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

<div use:module="{settings}" class="{classNames(_class, 'ui popup')}">
  <slot />
</div>
