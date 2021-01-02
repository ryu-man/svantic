<script>
  import '../../../fomantic/dist/components/step.css'
  import { classNames, css } from '../../utils'

  let _class = ''
  export let type = ''
  export let side = ''
  export let size = ''
  export let wide = ''
  export let attached = ''
  export let ordered = false
  export let vertical = false
  export let tablet = false
  export let stackable = false
  export let fluid = false
  export let unstackable = false
  export let inverted = false
  export { _class as class }
  export let style = {}
</script>

<div
  use:css="{style}"
  class:ordered
  class:vertical
  class:tablet
  class:stackable
  class:fluid
  class:unstackable
  class:attached
  class:inverted
  class="{classNames(type, side, size, wide, [attached, 'attached'], 'ui steps', _class)}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
