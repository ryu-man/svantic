<script lang="ts">
  import { css, register } from '../../utils'

  export let type = ''
  export let attached = ''
  export let aligned = ''
  export let color = ''
  export let size = ''
  export let horizontal: boolean = false
  export let floating: boolean = false
  export let circular: boolean = false
  export let inverted: boolean = false
  export let basic: boolean = false
  export let on = {}
  export let style = {}
  let _class = ''
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

<div
  use:init
  class="{_class}
    {size}
    {attached && `${attached} attached`}
    {aligned && `${aligned} aligned`}
    {color}
    {type} ui label"
  class:basic
  class:floating
  class:horizontal
  class:circular
  class:inverted
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style global>
  @import '../../../fomantic/dist/components/label.css';
</style>
