<script>
  import '../../../fomantic/dist/components/search'
  import '../../../fomantic/dist/components/search.css'
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

  function init(node, settings) {
    css(node, style)
    const unregister = register(node, on)
    let controller = new Controller(node, settings)
    onMount?.(controller)
    return {
      destroy() {
        unregister()
        controller = null
      }
    }
  }
</script>

<div
  use:init={settings}
  class:category
  class:fluid
  class:local
  class:long
  class:short
  class:scrolling
  class:loading
  class="{classNames(state, animation, speed, [aligned, 'aligned'], 'ui search', _class)}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
  <div class="results"></div>
</div>
