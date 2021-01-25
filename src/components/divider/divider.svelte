<script>
  import '../../../fomantic/dist/components/divider.css'
  import { css } from '../../utils'

  export let style = {}
  export let type = ''
  export let aligned = ''
  export let clearing = false
  export let section = false
  export let hidden = false
  export let fitted = false
  export let inverted = false
  let _class = ''
  export { _class as class }

  function init(node) {
    css(node, style)
  }
</script>

<div
  use:init
  class:clearing
  class:section
  class:hidden
  class:fitted
  class:inverted
  class="{type} {aligned && `${aligned}`} ui divider {_class}"
>
  <slot />
</div>