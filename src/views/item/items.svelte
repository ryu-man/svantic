<script>
  import { createEventDispatcher } from 'svelte'
  import { classNames, css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let style
  export let unstackable = false
  export let divided = false
  export let relaxed = false
  export let link = false
  export let inverted = false

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
    { unstackable, divided, relaxed, link, inverted },
    'items'
  )}"
>
  <slot />
</div>
