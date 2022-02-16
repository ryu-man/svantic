<script>
  import '../../semantic/dist/components/feed.css'

  import { classNames, css } from '../../utils'
  import { createEventDispatcher } from 'svelte'

  let _class = ''
  export { _class as class }
  export let style
  export let size
  export let inverted = false

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

<div
  use:css="{style}"
  use:init
  class:inverted
  class="{classNames(_class, 'ui', size, 'feed')}"
>
  <div class="event">
    <slot />
  </div>
</div>
