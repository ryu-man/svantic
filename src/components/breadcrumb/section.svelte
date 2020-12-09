<script lang="ts">
  import { register } from '../../utils/events'
  import { css } from '../../utils/css'

  let _class: string = ''
  export let style = {}
  export { _class as class }
  export let active = false
  export let on = {}

  function init(node: HTMLElement, params?: {}) {
    css(node, style)
    const unregister = register(node, on)
    return {
      update() {},
      destroy() {
        unregister()
      }
    }
  }
</script>

<div class="{_class} section" class:active>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style>
  /* your styles go here */
</style>
