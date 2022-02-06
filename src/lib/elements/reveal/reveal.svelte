<script>
  import '../../semantic/dist/components/reveal.min.css'
  
  import { classNames, css } from '../../utils'
  import { createEventDispatcher } from 'svelte'

  let _class = ''
  export { _class as class }
  export let style = {}
  export let type = ''
  export let direction = ''
  export let state = ''
  export let instant = false

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

<div
  use:css="{style}"
  use:init
  class:instant
  class="{classNames(
    _class,
    'ui',
    { instant },
    state,
    direction,
    type,
    'reaveal'
  )}"
>
  <slot />
</div>
