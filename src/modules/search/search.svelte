<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/search.css'
  import { css, register, classNames } from '../../utils'
  import Controller from './controller'

  let _class
  export let disabled = false
  export let speed = ''
  export let aligned
  export let animation = ''
  export let long = false
  export let fluid = false
  export let local = false
  export let short = false
  export let loading = false
  export let category = false
  export let scrolling = false
  export let style
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
  class="{classNames(
    _class,
    'ui',
    animation,
    speed,
    { disabled, category, fluid, local, long, scrolling, loading, aligned },
    'search'
  )}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
  <div class="results"></div>
</div>
