<script>
  import '../../../semantic/dist/components/progress.css'
  import { classNames, css } from '../../utils'
  import Controller from './controller'

  let _class = ''
  export { _class as class }
  export let indicating
  export let attached
  export let speed
  export let size
  export let color
  export let value = 0
  export let total = 100
  export let inverted = false
  export let indeterminate = false
  export let disabled = false
  export let error = false
  export let warning = false
  export let success = false
  export let active = false
  export let style = {}
  export let settings = {}
  export let onMount

  function module(node, settings) {
    // the node has been mounted in the DOM
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
  data-value="{value}"
  data-total="{total}"
  class="{classNames(
    'ui',
    { indicating },
    speed,
    size,
    color,
    [attached, 'attached'],
    [indeterminate, 'indeterminate'],
    { disabled, error, warning, success, active, inverted },
    _class,
    'progress'
  )}"
>
  <slot />
</div>
