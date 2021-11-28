<script>
  import { createEventDispatcher } from 'svelte'
  import { classNames, css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let style
  export let length
  export let fluid = false

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

<div
  use:css="{style}"
  use:init
  class="{classNames(_class, { fluid, length }, 'line')}"
></div>
