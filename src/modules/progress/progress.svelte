<script lang="ts">
  import { css } from '../../utils/css'
  import { register } from '../../utils/events'

  import type { Attach, Color, Size, Speed } from '../variations'
  import Controller from './controller'

  type Type = 'standard' | 'indicating'
  type State =
    | 'indeterminate'
    | 'disabled'
    | 'error'
    | 'warning'
    | 'success'
    | 'active'

  let _class = ''
  export let type: Type
  export let attached: Attach
  export let speed: Speed

  // swinging
  // sliding
  // filling

  export let state: State
  export let size: Size
  export let color: Color
  export let value: number = 0
  export let total: number = 100
  export let inverted: boolean = false
  export let style: {}
  export let on: {} = {}
  export { _class as class }

  export let onmount: (controller: Controller) => void = (_) => {}

  function init(node: HTMLElement, params?: {}) {
    // the node has been mounted in the DOM
    css(node, style)
    const unregister = register(node, on)
    let controller = new Controller(node)
    onmount(controller)
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
  use:init
  data-value="{value}"
  data-total="{total}"
  class="{_class}
    {type}
    {attached + ' attached'}
    {speed}
    {state}
    {size}
    {color} ui progress"
  class:inverted
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
