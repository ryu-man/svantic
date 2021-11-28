<script>
  import { createEventDispatcher } from 'svelte'
  import { classNames, css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let style = {}
  export let size = ''
  export let color = ''
  export let basic = false
  export let tag = false
  export let circular = false
  export let inverted = false

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

<div
  use:css="{style}"
  use:init
  class:basic
  class:tag
  class:circular
  class:inverted
  class="{classNames(
    _class,
    'ui',
    size,
    color,
    { basic, tag, circular, inverted },
    'labels'
  )}"
>
  <slot />
</div>
