<script lang="ts">
  import { css } from '../../utils/css'
  import { register } from '../../utils/events'

  let _class = ''
  export let wide = ''
  export let equal = false
  export let inline = false
  export let grouped = false
  export let style: {} = {}
  export let on: {} = {}
  export { _class as class }

  function init(node: HTMLElement, params?: {}) {
    css(node, style)
    const unregister = register(node, on)
    return {
      destroy() {
        unregister()
      }
    }
  }
</script>

<div
  use:init
  class="{_class} {wide && wide + ' wide'} fields"
  class:inline
  class:equal
  class:grouped
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
