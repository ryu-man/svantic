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

<div use:css="{style}" use:init class="{classNames(_class, 'summary')}">
  <slot />
</div>
