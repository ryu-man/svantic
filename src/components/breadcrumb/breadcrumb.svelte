<script lang="ts">
  import { register } from '../../utils/events'
  import { css } from '../../utils/css'

  let _class = ''
  export let style = {}
  export let size
  export { _class as class }
  export let on = {}

  function init(node: HTMLElement, params?: {}) {
    css(node, style)
    const unregister = register(node, on)
    return {
      update(params) {},
      destroy() {
        unregister()
        console.log('Button has been destroyed')
      }
    }
  }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<div class="{_class} {size} ui breadcrumb">
  <slot>
    
  </slot>
</div>

<style>
  @import '../../../fomantic/dist/components/breadcrumb.css';
</style>
