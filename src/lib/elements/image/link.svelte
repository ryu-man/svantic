<script>
  import { classNames, css } from '../../utils'
  import { createEventDispatcher } from 'svelte'

  let _class = ''
  export { _class as class }
  export let style
  export let src = ''
  export let alt = ''
  export let link = ''

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

<a use:css="{style}" use:init class="{classNames(_class, 'ui image')}" href="{link}">
  <img src="{src}" alt="{alt}" />
</a>
