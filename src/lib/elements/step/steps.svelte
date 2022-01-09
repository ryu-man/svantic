<script>
  import { createEventDispatcher } from 'svelte'
  import { classNames, css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let side
  export let size = ''
  export let wide
  export let attached
  export let ordered = false
  export let vertical = false
  export let tablet = false
  export let stackable = false
  export let fluid = false
  export let unstackable = false
  export let inverted = false
  export let style = {}

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

<div
  use:css="{style}"
  use:init
  class="{classNames(
    _class,
    'ui',
    side,
    size,
    wide,
    {
      ordered,
      vertical,
      tablet,
      stackable,
      fluid,
      unstackable,
      inverted,
      attached
    },
    'steps'
  )}"
>
  <slot />
</div>
