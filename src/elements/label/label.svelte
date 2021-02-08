<script>
  import { css, register, classNames } from '../../utils'

  let _class = ''
  export { _class as class }
  export let type = ''
  export let attached
  export let aligned
  export let color
  export let size
  export let horizontal = false
  export let floating = false
  export let circular = false
  export let inverted = false
  export let basic = false
  export let ribbon = false
  export let tag = false
  export let corner = false
  export let pointing = false
  export let image = false
  
  export let on = {}
  export let style = {}

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
    _class,
    'ui',
    size,
    color,
    {
      basic,
      horizontal,
      circular,
      inverted,
      floating,
      attached,
      aligned,
      ribbon,
      tag,
      corner,
      pointing,
      image
    },
    type,
    'label'
  )}"
  on:click
>
  <slot />
</div>
