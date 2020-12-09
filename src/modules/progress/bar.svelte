<script lang="ts">
  import { css } from '../../utils/css'
  import { register } from '../../utils/events'

  let _class: string = ''
  export let color: string = ''
  export let inverted = false
  export let progress = false
  export let on: {} = {}
  export let style: {} = {}
  export { _class as class }

  function init(node: HTMLElement, params?: {}) {
    // the node has been mounted in the DOM
    css(node, style)
    const unregister = register(node, on)
    return {
      // the node has been removed from the DOM
      destroy() {
        unregister()
      }
    }
  }
</script>

<div use:init class="{_class} {color} bar" class:inverted>
  {#if progress}
    <div class="progress"></div>
  {/if}
</div>
