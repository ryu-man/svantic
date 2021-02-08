<script>
  import '../../../semantic/dist/components/input.css'
  import { classNames, css } from '../../utils'

  let _class = ''
  export { _class as class }
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
  export let style = {}
</script>

<div
  use:css="{style}"
  class="{classNames(
    _class,
    'ui',
    color,
    size,
    state,
    { fluid, corner, inverted, transparent, labeled, icon, action },
    'input'
  )}"
>
  <slot>
    <input type="text" />
  </slot>
  <slot name="label" />
</div>
