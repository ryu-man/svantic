<script lang="ts">
  import { css } from '../../utils/css'
  import { register } from '../../utils/events'

  export let name: string = ''
  export let size: string = ''
  export let state: string = ''
  export let color: string = ''
  export let rotated: string = ''
  export let flipped: string = ''
  export let link = false
  export let corner = false
  export let fitted = false
  export let divider = false
  export let inverted = false
  export let bordered = false
  export let circular = false
  export let on = {}
  export let style = {}
  let _class: string = ''
  export { _class as class }

  function init(node: HTMLElement, _params?: {}) {
    css(node, style)
    const unregister = register(node, on)
    return {
      destroy() {
        unregister()
      }
    }
  }
</script>

<i
  use:init
  class="{_class}
    {size}
    {state}
    {color}
    {rotated && rotated + ' rotated'}
    {flipped && flipped + ' flipped'}
    {name} icon"
  class:link
  class:fitted
  class:corner
  class:divider
  class:inverted
  class:bordered
  class:circular
></i>

<style global>
  @import '../../../fomantic/dist/components/icon.css';
</style>
