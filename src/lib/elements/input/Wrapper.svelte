<script>
  import '../../semantic/dist/components/site.min.css'
  import '../../semantic/dist/components/reset.min.css'
  import '../../semantic/dist/components/input.min.css'
  import { classNames, css } from '../../utils'
  import { createEventDispatcher } from 'svelte'

  let _class = ''
  export { _class as class }
  export let size = ''
  export let state = ''
  export let color = ''
  export let icon = ''
  export let action = ''
  export let labeled = ''
  export let fluid = false
  export let corner = false
  export let inverted = false
  export let transparent = false
  export let style = {}

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
    color,
    size,
    state,
    { fluid, corner, inverted, transparent, labeled, icon, action },
    'input'
  )}"
>
  <slot />
</div>
