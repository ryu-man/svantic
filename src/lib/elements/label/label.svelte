<script>
  import '../../semantic/dist/components/transition.min.css'
  import '../../semantic/dist/components/label.min.css'

  import { css, classNames } from '../../utils'
  import { createEventDispatcher } from 'svelte'

  let _class = ''
  export { _class as class }
  export let type = ''
  export let attached
  export let aligned
  export let color
  export let size
  export let horizontal = false
  export let floating = false
  export let circular = false
  export let inverted = false
  export let basic = false
  export let ribbon = false
  export let tag = false
  export let corner = false
  export let pointing = false
  export let image = false

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
    size,
    color,
    {
      basic,
      horizontal,
      circular,
      inverted,
      floating,
      attached,
      aligned,
      ribbon,
      tag,
      corner,
      pointing,
      image
    },
    type,
    'label'
  )}"
  on:click
>
  <slot />
</div>
