<script>
  import { createEventDispatcher } from 'svelte'
  import { css, classNames } from '../../utils'

  export let size = ''
  export let style = {}
  let _class = ''
  export { _class as class }

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

<i use:css="{style}" use:init class="{classNames(_class, size, 'icons')}">
  <slot />
</i>
