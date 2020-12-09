<script lang="ts">
  import { css, register } from '../../utils'

  let _class = ''
  export let type = ''
  export let state = ''
  export let floated = ''
  export let attached = ''
  export let aligned = ''
  export let color = ''
  export let emphasis = ''
  export let tall = false
  export let double = false
  export let inverted = false
  export let padded = false
  export let fitted = false
  export let compact = false
  export let circular = false
  export let clearing = false
  export let basic = false
  export let blurring = false
  export let dimmable = false
  export let dimmed = false
  export let style: {} = {}
  export let on: {} = {}
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

<div
  use:init
  class="ui segment {_class}
    {emphasis}
    {type}
    {state}
    {floated + ' floated'}
    {attached + ' attached'}
    {aligned + ' aligned'}
    {color}"
  class:tall
  class:double
  class:inverted
  class:padded
  class:fitted
  class:compact
  class:circular
  class:clearing
  class:basic
  class:blurring
  class:dimmable
  class:dimmed
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style global>
  @import '../../../fomantic/dist/components/segment.css';
</style>