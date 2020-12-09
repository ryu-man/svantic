<script lang="ts">
  import { css, register } from '../../utils'

  let _class = ''
  export let aligned = ''
  export let floated = ''
  export let bulleted = false
  export let ordered = false
  export let link = false
  export let horizontal = false
  export let inverted = false
  export let selection = false
  export let animated = false
  export let relaxed = false
  export let divided = false
  export let celled = false
  export let style: {} = {}
  export let on: {} = {}
  export { _class as class }

  function init(node: HTMLElement, params?: {}) {
    css(node, style)
    const unregister = register(node, on)
    return {
      destroy() {
        unregister()
      }
    }
  }
</script>

<div
  use:init
  class="ui list {`${_class} ${floated && floated + 'floated'} ${aligned && aligned + ' aligned'}`}"
  class:link
  class:celled
  class:ordered
  class:relaxed
  class:divided
  class:bulleted
  class:inverted
  class:animated
  class:selection
  class:horizontal
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style global>
  @import '../../../fomantic/dist/components/list.css';
</style>
