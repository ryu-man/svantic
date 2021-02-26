<script>
  import '../../../semantic/dist/components/site.css'
  import '../../../semantic/dist/components/reset.css'
  import '../../../semantic/dist/components/form.css'
  import { classNames, css, register } from '../../utils'

  let _class
  export let style
  export let state
  export let size
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
  class="{classNames(
    _class,
    'ui',
    { 'equal width': equal },
    state,
    size,
    'form'
  )}"
>
  <slot />
</form>
