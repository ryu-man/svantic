<script>
  import '../../semantic/dist/components/site.min.css'
  import '../../semantic/dist/components/reset.min.css'
  import '../../semantic/dist/components/rail.min.css'

  import { css, classNames } from '../../utils'
  import { createEventDispatcher } from 'svelte'

  let _class = ''
  export { _class as class }
  export let side
  export let internal
  export let dividing
  export let attached
  export let close
  export let size
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
    side,
    size,
    { dividing, attached, internal, close },
    'rail'
  )}"
>
  <slot />
</div>
