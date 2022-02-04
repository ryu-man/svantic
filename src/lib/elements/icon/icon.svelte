<script>
  import '../../semantic/dist/components/transition.min.css'
  import '../../semantic/dist/components/icon.min.css'

  import { css, classNames } from '../../utils'
  import { createEventDispatcher } from 'svelte'

  export let name = ''
  export let size = ''
  export let state = ''
  export let color = ''
  export let rotated = ''
  export let flipped = ''
  export let link = false
  export let corner = false
  export let fitted = false
  export let divider = false
  export let inverted = false
  export let bordered = false
  export let circular = false
  export let style = {}
  let _class = ''
  export { _class as class }

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

<i
  use:css="{style}"
  use:init
  class="{classNames(
    _class,
    size,
    color,
    state,
    {
      link,
      fitted,
      corner,
      divider,
      inverted,
      bordered,
      circular,
      rotated,
      flipped
    },
    name,
    'icon'
  )}"></i>
