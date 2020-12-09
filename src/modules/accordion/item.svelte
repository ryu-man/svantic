<script lang="ts">
  import { css } from '../../utils/css'
  export let style
  function init(node: HTMLElement, params?: {}) {
    // the node has been mounted in the DOM
    css(node, style)
  }
</script>

<div use:init class="active title">
  <slot name="title">
    <!-- optional fallback -->
  </slot>
</div>
<div use:init class="active content">
  <slot name="content">
    <!-- optional fallback -->
  </slot>
</div>
