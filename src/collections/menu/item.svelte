<script>
  import { css, register } from '../../utils'

  export let active = false
  export let horizontally = false
  export let fitted = false
  export let href
  export let style = {}
  export let on = {}
  let _class = ''
  export { _class as class }

  function init(node) {
    css(node, style)
    const unregister = register(node, on)
    href && (node.href = href)
    return {
      destroy() {
        unregister()
      }
    }
  }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a use:init  class:active class:horizontally class:fitted class="item {_class}">
  <slot />
</a>
