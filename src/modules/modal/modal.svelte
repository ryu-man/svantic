<script lang="ts">
  import { css } from '../../utils/css'
  import { register } from '../../utils/events'
  import Controller from './controller'

  export let size = ''
  export let basic: boolean = false
  export let active: boolean = false
  export let overlay: boolean = false
  export let inverted: boolean = false
  export let fullscreen: boolean = false
  export let on = {}
  export let style = {}
  let _class = ''
  export { _class as class }

  export let onmount: (controller: Controller) => void = () => {}

  function init(node: HTMLElement, params?: {}) {
    css(node, style)
    let controller = new Controller(node)
    const unregister = register(node, on)
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
  class="{_class} {size} ui modal"
  class:basic
  class:active
  class:inverted
  class:overlay
  class:fullscreen
>
  <slot />
</div>

<style global>
  @import '../../../fomantic/dist/components/modal.css';
</style>
