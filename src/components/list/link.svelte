<script>
  import { css, register } from '../../utils'

  let _class = ''
  export let style = {}
  export let on= {}
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
<a use:init class="item {_class}">
  <slot>
    <!-- optional fallback -->
  </slot>
</a>

<style global>
  @import '../../../fomantic/dist/components/list.css';
</style>
