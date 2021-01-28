<script>
  import '../../../fomantic/dist/components/accordion'
  import '../../../fomantic/dist/components/accordion.css'
  import { css } from '../../utils'
  import { register } from '../../utils/events'
  import Controller from './controller'

  let _class = ''
  export let fluid = false
  export let styled = false
  export let inverted = false
  export let settings = {}
  export let style = {}
  export let on = {}
  export let onMount

  function init(node, settings) {
    // the node has been mounted in the DOM
    css(node, style)
    const unregister = register(node, on)
    let controller = new Controller(node, settings)
    onMount?.(controller)
    return {
      // the node has been removed from the DOM
      destroy() {
        unregister()
        controller = null
      }
    }
  }
</script>

<div
  use:init = {settings}
  class:styled
  class:fluid
  class:inverted
  class="ui accordion {_class}"
>
  <slot />
</div>
