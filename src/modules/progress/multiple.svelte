<script>
  import { createEventDispatcher } from 'svelte'
  import { css, classNames } from '../../utils'

  let _class
  export { _class as class }
  export let total = 100
  export let percents = []
  export let style

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

<div
  use:css="{style}"
  use:init
  class="{classNames(_class, 'ui', 'multiple progress')}"
  data-total="{total}"
  data-percent="{percents.join(',')}"
>
  <slot />
</div>
