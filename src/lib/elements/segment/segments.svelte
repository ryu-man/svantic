<script>
  import { createEventDispatcher } from 'svelte'
  import { classNames, css } from '../../utils'

  export let type = ''
  export let style = {}
  let _class = ''
  export { _class as class }

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

<div use:css="{style}" class="{classNames(_class, 'ui', type, 'segments')}">
  <slot />
</div>
