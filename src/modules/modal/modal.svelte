<script>
  import '../../../fomantic/dist/components/modal.css'
  import { css } from '../../utils'
  import Controller from './controller'

  export let size = ''
  export let basic = false
  export let active = false
  export let overlay = false
  export let inverted = false
  export let fullscreen = false
  export let style = {}
  let _class = ''
  export { _class as class }

  export let onMount

  function init(node) {
    css(node, style)
    let controller = new Controller(node)
    onMount?.(controller)
    return {
      destroy() {
        controller = null
      }
    }
  }
</script>

<div
  use:init
  class:basic
  class:active
  class:inverted
  class:overlay
  class:fullscreen
  class="{size} ui modal {_class}"
>
  <slot />
</div>

