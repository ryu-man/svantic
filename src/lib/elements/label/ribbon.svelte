<script>
  import { createEventDispatcher } from 'svelte'
  import { classNames, css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let icon
  export let color
  export let right = false
  export let style = {}

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a
  use:css="{style}"
  use:init
  class="{classNames(_class, 'ui', color, { icon, right }, 'ribbon', 'label')}"
>
  <slot />
</a>
