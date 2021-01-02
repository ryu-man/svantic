<script>
  import '../../../fomantic/dist/components/segment.css'
  import { css } from '../../utils'

  export let type = ''
  export let style = {}
  let _class = ''
  export { _class as class }

  function init(node) {
    // the node has been mounted in the DOM
    css(node, style)
  }
</script>

<div use:init class="{_class} {type} ui segments">
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

