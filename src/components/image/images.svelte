<script lang="ts">
  import { css } from '../../utils/css'
  import { register } from '../../utils/events'

  export let size = ''
  export let style = {}
  export let on: {} = {}
  let _class = ''
  export { _class as class }

  function init(node: HTMLElement, params?: {}) {
    // the node has been mounted in the DOM
    css(node, style)
    const unregister = register(node, on)
    return {
      // the node has been removed from the DOM
      destroy() {
        unregister()
      }
    }
  }
</script>

<div use:init class="{_class} {size} ui images">
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style global>
  @import '../../../fomantic/dist/components/image.css';
</style>