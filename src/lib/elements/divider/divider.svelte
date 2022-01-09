<script>
  import '../../../../semantic/dist/components/site.min.css'
  import '../../../../semantic/dist/components/reset.min.css'
  import '../../../../semantic/dist/components/divider.min.css'
  
  import { classNames, css } from '../../utils'
  import { createEventDispatcher } from 'svelte'

  export let style = {}
  export let type = ''
  export let aligned = ''
  export let clearing = false
  export let section = false
  export let hidden = false
  export let fitted = false
  export let ignored = false
  export let vertical = false
  export let inverted = false
  let _class = ''
  export { _class as class }

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

<div
  use:css="{style}"
  use:init
  class="{classNames(
    _class,
    'ui',
    { clearing, section, hidden, fitted, ignored, vertical, inverted, aligned },
    'divider'
  )}"
>
  <slot />
</div>
