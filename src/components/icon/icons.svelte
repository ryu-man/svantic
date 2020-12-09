<script lang="ts">
  import { register } from '../../utils/events'

  export let size = ''
  export let on = {}
  export let style = {}
  let _class = ''
  export { _class as class }

  function init(node: HTMLElement, params?: {}) {
    node.style.cssText = Object.entries(style)
      .map((e) => `${e[0]}:${e[1]}`)
      .join(';')
    const unregister = register(node, on)
    return {
      update(params) {},
      destroy() {
        unregister()
      }
    }
  }
</script>

<i use:init class="{_class} {size} icons">
  <slot>
    <!-- optional fallback -->
  </slot>
</i>

<style global>
  @import '../../../fomantic/dist/components/icon.css';
</style>