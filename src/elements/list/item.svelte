<script>
  import { createEventDispatcher } from 'svelte'
  import { classNames, css } from '../../utils'

  let _class = ''
  export let style = {}
  export { _class as class }

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a use:css="{style}" use:init class="{classNames(_class, 'item')}">
  <slot />
</a>
