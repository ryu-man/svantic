<script>
  import '../../../semantic/dist/components/dimmer.css'
  import { css, classNames } from '../../utils'
  import Controller from './controller'

  let _class = ''
  export { _class as class }
  export let style = {}
  export let type = ''
  export let state = ''
  export let aligned = ''
  export let shades = ''
  export let partial = ''
  export let inverted = false
  export let settings = {}
  export let onMount

  function init(node, settings) {
    css(node, style)

    let controller = new Controller(node, settings)
    onMount?.(controller)

    return {
      // the node has been removed from the DOM
      destroy() {
        controller.destroy()
        controller = null
      }
    }
  }
</script>

<div
  use:init="{settings}"
  class:inverted
  class="{classNames(
    shades,
    partial,
    state,
    type[(aligned, 'aligned')],
    'ui dimmer',
    _class
  )}"
>
  {#if type == 'content'}
    <div class="content">
      <slot>
        <!-- optional fallback -->
      </slot>
    </div>

    <slot>
      <!-- optional fallback -->
    </slot>
  {/if}
</div>
