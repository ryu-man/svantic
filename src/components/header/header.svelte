<script>
  import { register, css, classNames } from '../../utils'

  let _class = ''
  export let style = {}
  export let attached = ''
  export let floated = ''
  export let aligned = ''
  export let icon = false
  export let sub = false
  export let disabled = false
  export let dividing = false
  export let block = false
  export let inverted = false
  export let on = {}
  export { _class as class }

  function init(node) {
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
  class="{classNames(
    [attached, 'attached'],
    [floated, 'floated'],
    [aligned, 'aligned'],
    'ui header',
    _class
  )}"
  class:icon
  class:sub
  class:disabled
  class:dividing
  class:block
  class:attached="{attached != ''}"
  class:floated="{floated != ''}"
  class:aligned="{aligned != ''}"
  class:inverted
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
