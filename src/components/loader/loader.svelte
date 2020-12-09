<script lang="ts">
  import { css } from '../../utils/css'
  import { register } from '../../utils/events'

  let _class = ''
  export let type = ''
  export let state = ''
  export let speed = ''
  export let animationStyle = ''
  export let inline = false
  export let center = false
  export let inverted = false
  export let icon: boolean = false
  export let style = {}
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
  class=" ui loader {_class} {type} {state} {animationStyle} {speed}"
  class:inline
  class:center
  class:inverted
  class:icon
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style global>
  @import '../../../fomantic/dist/components/loader.css';
</style>
