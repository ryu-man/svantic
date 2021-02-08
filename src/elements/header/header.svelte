<script>
  import { register, css, classNames } from '../../utils'

  let _class = ''
  export { _class as class }
  export let attached = ''
  export let floated = ''
  export let aligned = ''
  export let divider
  export let dividing = false
  export let icon = false
  export let disabled = false
  export let block = false
  export let inverted = false
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
    {
      icon,
      disabled,
      block,
      inverted,
      dividing,
      attached,
      floated,
      aligned,
      divider
    },
    'header'
  )}"
>
  <slot />
</div>
