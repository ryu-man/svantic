<script>
  import '../../../semantic/dist/components/input.css'
  import { classNames, css, register } from '../../utils'

  let _class = ''
  export let size = ''
  export let state = ''
  export let color = ''
  export let icon = ''
  export let action = ''
  export let labeled = ''
  export let fluid = false
  export let corner = false
  export let inverted = false
  export let transparent = false
  export let on = {}
  export let style = {}
  export { _class as class }

  function init(node) {
    css(node, style)
    const unregister = register(node, on)
    return {
      destroy() {
        unregister()
      }
    }
  }
</script>

<div
  use:init
  class:fluid
  class:corner
  class:inverted
  class:transparent
  class="{classNames(
    color,
    size,
    state,
    [labeled, 'labeled'],
    [icon, 'icon'],
    [action, 'action'],
    'ui input',
    _class
  )}"
>
  <slot>
    <input type="text" />
  </slot>
  <slot name="label" />
</div>
