<script>
  import { createEventDispatcher } from 'svelte';
  import { css, classNames } from '../../utils'

  let _class = ''
  export { _class as class }

  const dispatch = createEventDispatcher()

  function init(node) {
      dispatch('mount', node)
  }
</script>

<div use:init class="{classNames(_class, 'ui popup')}">
  <slot />
</div>
