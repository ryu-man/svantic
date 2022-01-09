<script>
  import '../../../../semantic/dist/components/site.min.css'
  import '../../../../semantic/dist/components/reset.min.css'
  import '../../../../semantic/dist/components/transition.min.css'
  import '../../../../semantic/dist/components/loader.min.css'

  import { classNames, css } from '../../utils'
  import { createEventDispatcher } from 'svelte'

  let _class = ''
  export { _class as class }
  export let text = false
  export let intermediat = false
  export let active = false
  export let disabled = false
  export let speed = ''
  export let animationStyle = ''
  export let inline = false
  export let center = false
  export let inverted = false
  export let icon = false
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
    animationStyle,
    speed,
    { inline, center, icon, inverted, active, intermediat, disabled },
    text,
    'loader'
  )}"
>
  <slot />
</div>
