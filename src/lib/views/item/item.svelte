<script>
  import '../../semantic/dist/components/item.min.css'

  import { classNames, css } from '../../utils'
  import { createEventDispatcher } from 'svelte'

  let _class
  export { _class as class }
  export let style

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

<div use:css="{style}" use:init class="{classNames(_class, 'item')}">
  <slot />
</div>
