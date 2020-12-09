<script>
  import { css } from '../../utils'
  let _class = ''
  let style = {}
  export { _class as class }

  function init(node) {
    css(node, style)
  }
</script>

<div use:init class="paragraph {_class}">
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
