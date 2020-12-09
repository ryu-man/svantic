<script lang="ts">
  import { css } from '../../utils/css'
  import { register } from '../../utils/events'

  let _class = ''
  export let wide = ''
  export let state = ''
  export let inline = false
  export let disabled = false
  export let required = false
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
  class="{_class} {wide && wide + ' wide'} {state} field"
  class:inline
  class:disabled
  class:required
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style>
</style>
