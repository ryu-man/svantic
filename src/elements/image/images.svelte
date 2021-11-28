<script>
  import { css, classNames } from '../../utils'
  import { createEventDispatcher } from 'svelte'

  export let size = ''
  export let style = {}
  let _class = ''
  export { _class as class }

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

<div
  use:css="{style}"
  use:init
  class="{classNames(_class, 'ui', size, 'images')}"
>
  <slot />
</div>
