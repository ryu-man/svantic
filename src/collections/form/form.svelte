<script>
  import '../../../fomantic/dist/components/form.css'
  import { css, register } from '../../utils'

  let _class = ''
  export let style = {}
  export let state = ''
  export let size = ''
  export let inverted = false
  export let equal = false
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

<form
  use:init
  class:inverted
  class:equal
  class:width="{equal}"
  class="{state} {size} ui form {_class}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</form>