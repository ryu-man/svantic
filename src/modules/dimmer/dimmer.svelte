<script>
  import { css, classNames } from '../../utils'

  let _class = ''
  export let style = {}
  //content
  //page
  export let type = ''
  // active
  // disabled
  export let state = ''
  // top
  // bottom
  // center
  export let aligned = ''
  // medium
  // light
  // very light
  export let shades = ''
  // bottom
  // center
  // top
  export let partial = ''
  export let inverted = false
  export { _class as class }

  export let onMount

  function init(node) {
    css(node, style)

    let controller = new Controller(node)
    onMount?.(controller)
  }
</script>

<div
  use:init
  class:inverted
  class="{classNames(shades, partial, state, type[(aligned, 'aligned')], 'ui dimmer', _class)}"
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

<style global>
  @import '../../../fomantic/dist/components/dimmer.css';
</style>
