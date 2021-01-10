<script>
  import '../../../fomantic/dist/components/button.css'
  import { classNames, css, register } from '../../utils'

  let _class = ''
  export { _class as class }
  export let size = ''
  export let type = ''
  export let color = ''
  export let state = ''
  export let social = ''
  export let floated = ''
  export let attached = ''
  export let fade = false
  export let icon = false
  export let fluid = false
  export let toggle = false
  export let compact = false
  export let circular = false
  export let positive = false
  export let negative = false
  export let inverted = false
  export let vertical = false
  export let style = {}
  export let on = {}

  $: _type = type?.join?.(' ') ?? type

  function init(node) {
    css(node, style)
    const unregister = register(node, on)
    return {
      destroy() {
        unregister()
      }
    }
  }
</script>

<div
  use:init
  class:fade
  class:icon
  class:fluid
  class:toggle
  class:compact
  class:circular
  class:positive
  class:negative
  class:inverted
  class:vertical
  class="{classNames(size, state, social, color, [floated, 'floated'], [attached, 'attached'], 'ui button', _class)}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
