<script lang="ts">
  import { css } from '../../utils/css'
  import { register } from '../../utils/events'

  let _class: string = ''
  export let total: number = 100
  export let percents: Array<number> = []
  export let style: {} = {}
  export let on: {} = {}
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

<div
  class="{_class} ui multiple progress"
  data-total="{total}"
  data-percent="{percents.join(',')}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style>
  /* @import './progress.css';*/
</style>
