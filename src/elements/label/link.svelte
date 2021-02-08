<script>
  import { register, css, classNames } from '../../utils'

  let _class = ''
  export { _class as class }
  export let attached = ''
  export let aligned = ''
  export let color = ''
  export let size = ''
  export let basic = false
  export let horizontal = false
  export let floating = false
  export let circular = false
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

<!-- svelte-ignore a11y-missing-attribute -->
<a
  use:init
  class="{classNames(
    _class,
    'ui',
    size,
    color,
    { basic, horizontal, circular, inverted, attached, floating, aligned },
    'label'
  )}"
>
  <slot />
</a>
