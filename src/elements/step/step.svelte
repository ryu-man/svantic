<script>
  import { register } from '../../utils'

  export let state = ''
  export let link = false
  export let on = {}
  export let style = {}
  let _class = ''
  export { _class as class }

  function init(node) {
    css(node, style)
    const unregister = register(node, on)
    return {
      update(params) {},
      destroy() {
        unregister()
      }
    }
  }
</script>

<div
  use:init
  class="ui step {state} {_class}"
  class:link
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
