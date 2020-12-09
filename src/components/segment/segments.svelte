<script lang="ts">
  import { css } from '../../utils'

  export let type = ''
  export let style = {}
  let _class = ''
  export { _class as class }

  function init(node: HTMLElement, params?: {}) {
    // the node has been mounted in the DOM
    css(node, style)
  }
</script>

<div class="{_class} {type} ui segments">
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style global>
  @import '../../../fomantic/dist/components/segment.css';
</style>
