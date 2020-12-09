<script>
  import { css } from '../../utils'

  let _class = ''
  export let style = {}
  export { _class as class }

  function init(node) {
    // the node has been mounted in the DOM
    css(node, style)
  }
</script>

<div class="{_class} side">
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
