<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

<div use:init class="label">
  <slot />
</div>
