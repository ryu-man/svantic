<script>
  import '../../../fomantic/dist/components/image.css'
  import { css, register, classNames } from '../../utils'

  export let src = ''
  export let alt = ''
  export let size = ''
  export let state = ''
  export let aligned = ''
  export let floated = ''
  export let round = false
  export let space = false
  export let fluid = false
  export let avatar = false
  export let middle = false
  export let circular = false
  export let centered = false
  export let bordered = false
  export let on = {}
  export let style = {}
  let _class = ''
  export { _class as class }

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

<img
  use:init
  class:avatar
  class:bordered
  class:fluid
  class:round
  class:circular
  class:middle
  class:centered
  class:space
  class="{classNames(state, size, [floated, 'floated'], [aligned, 'aligned'], 'ui image', _class)}"
  src="{src}"
  alt="{alt}"
/>
<slot>
  <!-- optional fallback -->
</slot>
