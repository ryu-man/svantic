<script>
  import { createEventDispatcher } from 'svelte';
  import { classNames, css } from '../../utils'

  let _class
  export { _class as class }
  export let color = ''
  export let inverted = false
  export let progress = false
  export let style

  const dispatch = createEventDispatcher()

  function init(node) {
      dispatch('mount', node)
  }
</script>

<div
  use:css="{style}"
  use:init
  class="{classNames(_class, color, { inverted }, 'bar')}"
  on:click
>
  {#if progress}
    <div class="progress"></div>
  {/if}
</div>
