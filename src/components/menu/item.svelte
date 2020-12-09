<script lang="ts">
  import { css, register } from '../../utils'

  export let active = false
  export let horizontally = false
  export let fitted = false
  export let style = {}
  export let on = {}
  let _class = ''
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

<!-- svelte-ignore a11y-missing-attribute -->
<a use:init class="item {_class}" class:active class:horizontally class:fitted>
  <slot>
    <!-- optional fallback -->
  </slot>
</a>
