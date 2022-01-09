<script>
  import { createEventDispatcher } from 'svelte';
  import { css, classNames } from '../../utils'

  let _class
  export { _class as class }
  export let style
  export let direction
  export let open
  export let scrolling

  const dispatch = createEventDispatcher()

  function init(node) {
      dispatch('mount', node)
  }
</script>

<div
  use:css="{style}"
  use:init
  class="{classNames(_class, direction, { open, scrolling }, 'menu')}"
>
  <slot />
</div>
