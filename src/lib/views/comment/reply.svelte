<script>
  import { createEventDispatcher } from 'svelte'
  import { classNames, css } from '../../utils'

  let _class
  export { _class as class }
  export let style

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

<form use:init use:css="{style}" class="{classNames(_class, 'ui reply form')}">
  <slot />
</form>
