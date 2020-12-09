<script lang="ts">
  import { css } from '../../utils/css'
  import { register } from '../../utils/events'
  import Controller from './controller'

  let _class: string = ''
  export let state: string = ''
  export let speed: string = ''
  export let aligned: string = ''
  export let animation: string = ''
  export let long: boolean = false
  export let fluid: boolean = false
  export let local: boolean = false
  export let short: boolean = false
  export let loading: boolean = false
  export let category: boolean = false
  export let scrolling: boolean = false
  export let style: {} = {}
  export let on = {}
  export { _class as class }

  export let onmount: (controller: Controller) => void = () => {}

  function init(node: HTMLElement, _params?: {}) {
    css(node, style)
    const unregister = register(node, on)
    let controller = new Controller(node)
    onmount(controller)
    return {
      destroy() {
        unregister()
        controller = null
      }
    }
  }
</script>

<div
  use:init
  class="{_class} {state} {animation} {speed} {aligned && (aligned + ' aligned')} ui search"
  class:category
  class:fluid
  class:local
  class:long
  class:short
  class:scrolling
  class:loading
>
  <slot>
    <!-- optional fallback -->
  </slot>
  <div class="results"></div>
</div>

<style global>
  @import '../../../fomantic/dist/components/search.css';
</style>
