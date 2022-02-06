<script>
  import { createEventDispatcher } from 'svelte'
  import { classNames, css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let style = {}
  //visible
  //hidden
  export let state = ''

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

<div use:css="{style}" use:init class="{classNames(_class, state, 'content')}">
  <slot />
</div>
