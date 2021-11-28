<script>
  import { createEventDispatcher } from 'svelte'
  import { css, classNames } from '../../utils'

  let _class = ''
  export { _class as class }
  export let attached = ''
  export let aligned = ''
  export let color = ''
  export let size = ''
  export let basic = false
  export let horizontal = false
  export let floating = false
  export let circular = false
  export let inverted = false
  export let style = {}

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a
  use:css="{style}"
  use:init
  class="{classNames(
    _class,
    'ui',
    size,
    color,
    { basic, horizontal, circular, inverted, attached, floating, aligned },
    'label'
  )}"
>
  <slot />
</a>
