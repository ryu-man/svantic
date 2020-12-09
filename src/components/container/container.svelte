<script lang="ts">
  import { register } from '../../utils/events'
  import { css } from '../../utils/css'

  let _class = ''
  export let style = {}
  export let on = {}

  export { _class as class }

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

<div use:init class="ui container {_class}">
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style global>
  @import '../../../fomantic/dist/components/container.css';
</style>
