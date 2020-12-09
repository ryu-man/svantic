<script lang="ts">
  import { register } from '../../utils/events'
  import { css } from '../../utils/css'


  let _class: string = ''
  export { _class as class }
  export let size: string = ''
  export let type: string = ''
  export let color: string = ''
  export let state: string = ''
  export let social: string = ''
  export let floated: string = ''
  export let attached: string = ''
  export let fade: boolean = false
  export let icon: boolean = false
  export let fluid: boolean = false
  export let toggle: boolean = false
  export let compact: boolean = false
  export let circular: boolean = false
  export let positive: boolean = false
  export let negative: boolean = false
  export let inverted: boolean = false
  export let vertical: boolean = false
  export let style: {} = {}
  export let on = {}

  function init(node: HTMLElement) {
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
  class="{_class}
    {type}
    {state}
    {social}
    {size}
    {floated && `${floated} floated`}
    {attached && `${attached} attached`}
    {color} ui button"
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
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style global>
  @import '../../../fomantic/dist/components/button.css';
</style>
