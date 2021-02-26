<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/dimmer.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/modal.min.css'
  import { classNames, css } from '../../utils'
  import Controller from './controller'

  let _class = ''
  export { _class as class }
  export let size = ''
  export let basic = false
  export let active = false
  export let overlay = false
  export let inverted = false
  export let fullscreen = false
  export let style = {}
  export let settings
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

<div
  use:module="{settings}"
  class="{classNames(
    _class,
    'ui',
    { basic, active, overlay, fullscreen, inverted },
    size,
    'modal'
  )}"
>
  <slot />
</div>
