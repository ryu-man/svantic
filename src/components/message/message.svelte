<script lang="ts">
  import { css, register } from '../../utils'

  export let type:string | string[] = ''
  export let size = ''
  export let state = ''
  export let context = ''
  export let attached = ''
  export let compact = false
  export let floating = false
  export let on = {}
  export let style = {}
  let _class = ''
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
  class="ui message {_class}
    {attached + `${attached} attached`}
    {type}
    {context}
    {state}
    {size}"
  class:compact
  class:floating
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style global>
  @import '../../../fomantic/dist/components/message.css';
</style>
