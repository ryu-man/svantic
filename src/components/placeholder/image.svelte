<script>
  export let header = false
  export let square = false
  export let style = {}

  function init(node) {
    css(node, style)
  }
</script>

<div
use:init
  class="image"
  class:header
  class:square
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
