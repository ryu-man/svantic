<script>
  import '../../../semantic/dist/components/dimmer.css'
  import { css, classNames } from '../../utils'
  import Controller from './controller'

  let _class = ''
  export { _class as class }
  export let style = {}
  export let page = false
  export let disabled = false
  export let active = false
  export let state = ''
  export let aligned = ''
  export let shades = ''
  export let partial = ''
  export let inverted = false
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
    shades,
    partial,
    state,
    { inverted, page, active, disabled, aligned },
    'dimmer'
  )}"
>
    <slot>
      <!-- optional fallback -->
    </slot>
</div>
