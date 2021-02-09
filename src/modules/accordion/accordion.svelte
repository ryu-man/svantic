<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/accordion.css'
  import { classNames, css } from '../../utils'
  import { register } from '../../utils/events'
  import Controller from './controller'

  let _class = ''
  export let fluid = false
  export let vertical = false
  export let following = false
  export let text = false
  export let menu = false
  export let styled = false
  export let inverted = false
  export let settings = {}
  export let style = {}
  export let on = {}
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
  class="{classNames(
    _class,
    'ui',
    vertical,
    fluid,
    following,
    styled,
    inverted,
    'accordion',
    text,
    menu
  )}"
>
  <slot />
</div>
