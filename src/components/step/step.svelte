<script lang="ts">
  import { register } from '../../utils/events'

  export let state = ''
  export let link = false
  export let on = {}
  export let style = {}
  let _class = ''
  export { _class as class }

  function init(node: HTMLElement, params?: {}) {
    const unregister = register(node, on)
    return {
      update(params) {},
      destroy() {
        unregister()
      }
    }
  }
</script>

<div
  use:init
  class="{_class} {state} ui step"
  style="{Object.entries(style)
    .map((e) => `${e[0]}:${e[1]}`)
    .join(';')}"
  class:link
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style>
  /* @import './step.css';*/
</style>
