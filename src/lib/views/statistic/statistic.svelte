<script>
  import '../../../../semantic/dist/components/site.min.css'
  import '../../../../semantic/dist/components/reset.min.css'
  import '../../../../semantic/dist/components/statistic.min.css'

  import { css, classNames } from '../../utils'
  import { createEventDispatcher } from 'svelte'

  let _class
  export let style
  export let color
  export let size
  export let floated
  export let stackable
  export let inverted
  export let horizontal

  export { _class as class }

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

<div
  use:css="{style}"
  use:init
  class:inverted
  class:horizontal
  class="{classNames(
    _class,
    'ui',
    color,
    size,
    { horizontal, inverted, floated, stackable },
    'statistic'
  )}"
>
  <slot />
</div>
