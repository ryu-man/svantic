<script lang="ts">
  import { register } from '../../utils/events'
  import { css } from '../../utils/css'

  let _class = ''
  export let style = {}
  export let state = ''
  export let size = ''
  export let inverted = false
  export let equal = false
  export let on = {}
  export { _class as class }

  function init(node: HTMLElement) {
    css(node, style)
    const unregister = register(node, on)
    return {
      destroy() {
        unregister()
      }
    }
  }
</script>

<form
  use:init
  class="{_class} {state} {size} ui form"
  class:inverted
  class:equal
  class:width="{equal}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</form>

<style global>
  @import '../../../fomantic/dist/components/form.css';
</style>
