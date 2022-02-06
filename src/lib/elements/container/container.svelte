<script>
  import '../../semantic/dist/components/container.min.css'

  import { css, classNames } from '../../utils'
  import { createEventDispatcher } from 'svelte'

  let _class = ''
  export { _class as class }
  export let style = {}
  export let aligned
  export let fluid = false
  export let justified = false

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

<div
  use:css="{style}"
  use:init
  class="{classNames(_class, 'ui', { justified, fluid, aligned }, 'container')}"
>
  <slot />
</div>
