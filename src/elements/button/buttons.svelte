<script>
  import { createEventDispatcher } from 'svelte'

  import { css, classNames } from '../../utils'

  let _class = ''
  export { _class as class }
  export let color = ''
  export let icon = false
  export let vertical = false
  export let stackable = false
  export let labeled
  export let basic = false
  export let size
  export let width
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
    { icon, vertical, stackable, basic, labeled },
    color,
    size,
    width,
    'buttons'
  )}"
>
  <slot />
</div>
