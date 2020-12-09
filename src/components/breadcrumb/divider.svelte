<script lang="ts">
  import { css } from '../../utils/css'

  let _class: string = ''
  export let style = {}
  export { _class as class }

  function init(node: HTMLElement, params?: {}) {
    // the node has been mounted in the DOM
    css(node, style)
  }
</script>

<div use:init class="{_class} divider">
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style>
  /* your styles go here */
</style>
