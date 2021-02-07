<script>
  import '../../../semantic/dist/components/search.css'
  import { css, register, classNames } from '../../utils'
  import Controller from './controller'

  let _class = ''
  export let state = ''
  export let speed = ''
  export let aligned = ''
  export let animation = ''
  export let long = false
  export let fluid = false
  export let local = false
  export let short = false
  export let loading = false
  export let category = false
  export let scrolling = false
  export let style = {}
  export let on = {}
  export let settings = {}
  export { _class as class }

  export let onMount

  function module(node, settings) {
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
  class:category
  class:fluid
  class:local
  class:long
  class:short
  class:scrolling
  class:loading
  class="{classNames(
    state,
    animation,
    speed,
    [aligned, 'aligned'],
    'ui search',
    _class
  )}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
  <div class="results"></div>
</div>
