<script>
  import '../../semantic/dist/components/form.css'

  import { classNames, css } from '../../utils'
  import { createEventDispatcher } from 'svelte'

  let _class
  export { _class as class }
  export let style
  export let state
  export let size
  export let inverted = false
  export let equal = false
  export let fluid = false

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

<form
  use:css="{style}"
  use:init
  class:width="{equal}"
  class="{classNames(
    _class,
    'ui',
    { 'equal width': equal, inverted, fluid },
    state,
    size,
    'form'
  )}"
>
  <slot />
</form>
