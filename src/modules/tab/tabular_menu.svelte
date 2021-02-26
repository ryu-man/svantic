<script>
  import '../../../semantic/dist/components/site.css'
  import '../../../semantic/dist/components/reset.css'
  import '../../../semantic/dist/components/transition.css'
  import '../../../semantic/dist/components/tab.css'
  import { classNames, css } from '../../utils'
  import Controller from './controller'

  export let _class
  export { _class as class }
  export let attached = ''
  export let loading = false
  export let segment = false
  export let active = false
  export let style
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

<div
  use:module="{settings}"
  class="{classNames(
    _class,
    'ui',
    { loading, segment, active, attached },
    'tabular menu'
  )}"
>
  <slot name="item" />
</div>
<slot />
