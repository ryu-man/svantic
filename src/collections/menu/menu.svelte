<script>
  import '../../../fomantic/dist/components/menu.css'
  import { classNames, css } from '../../utils'

  let _class = ''
  export let style = {}
  export let type = ''
  export let wide = ''
  export let size = ''
  export let item = false
  export let attached = ''
  export let fluid = false
  export let compact = false
  export let fixed = false
  export let stackable = false
  export let inverted = false
  export let icon = false
  export let labeled = false
  export let borderless = false
  export { _class as class }
</script>

<div
  use:css="{style}"
  class:item
  class:fluid
  class:compact
  class:fixed
  class:stackable
  class:inverted
  class:icon
  class:labeled
  class:borderless
  class="{classNames(type, [attached, 'attached'], wide, size, 'ui menu', _class)}"
>
  <slot />
</div>
