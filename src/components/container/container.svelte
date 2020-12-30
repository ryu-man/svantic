<script>
  import { register } from '../../utils/events'
  import { css } from '../../utils'

  let _class = ''
  export let style = {}
  export let on = {}

  export { _class as class }

  function init(node) {
    css(node, style)
    const unregister = register(node, on)
    return {
      destroy() {
        unregister()
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
