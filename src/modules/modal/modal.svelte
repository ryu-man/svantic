<script>
  import '../../../semantic/dist/components/modal'
  import '../../../semantic/dist/components/modal.css'
  import { css } from '../../utils'
  import Controller from './controller'

  let _class = ''
  export { _class as class }
  export let size = ''
  export let basic = false
  export let active = false
  export let overlay = false
  export let inverted = false
  export let fullscreen = false
  export let style = {}
  export let settings = {}
  export let onMount

  function init(node, settings) {
    css(node, style)
    let controller = new Controller(node, settings)
    onMount?.(controller)
    return {
      destroy() {
        controller = null
      }
    }
  }
</script>

<div
  use:init = {settings}
  class:basic
  class:active
  class:inverted
  class:overlay
  class:fullscreen
  class="{size} ui modal {_class}"
>
  <slot />
</div>
