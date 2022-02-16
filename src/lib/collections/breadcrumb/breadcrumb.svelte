<script>
  import '../../semantic/dist/components/breadcrumb.css'

  import { classNames, css } from '../../utils'
  import { createEventDispatcher } from 'svelte'

  let _class = ''
  export let style = {}
  export let size
  export let inverted = false
  export { _class as class }

  const dispatch = createEventDispatcher()
  function init(node) {
    dispatch('mount', node)
  }
</script>

<div
  use:css="{style}"
  use:init
  class="{classNames(_class, 'ui', size, { inverted }, 'breadcrumb')}"
>
  <slot />
</div>
