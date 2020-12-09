<script lang="ts">
  import { register } from '../../utils/events'

  let _class = ''
  export let style = {}
  export let on = {}
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

<h4
  class="ui header {_class}"
  style="{Object.entries(style)
    .map((e) => `${e[0]}:${e[1]}`)
    .join(';')}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</h4>

<style global>
  @import '../../../fomantic/dist/components/header.css';
</style>
