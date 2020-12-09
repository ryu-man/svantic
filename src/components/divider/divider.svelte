<script lang="ts">
  import { css } from '../../utils/css'

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

  function init(node: HTMLElement) {
    css(node, style)
  }
</script>

<div
  use:init
  class="{_class} {type} {aligned && `${aligned}`} ui divider"
  class:clearing
  class:section
  class:hidden
  class:fitted
  class:inverted
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style global>
  @import '../../../fomantic/dist/components/divider.css';
</style>
