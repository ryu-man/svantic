<script lang="ts">
  import { css } from '../../utils'

  let _class = ''
  export let style = {}
  export let type: string | string[] = ''
  export let wide = ''
  export let size = ''
  export let item = false
  export let attached = ''
  export let fluid = false
  export let compact = false
  export let fixed = false
  export let stackable = false
  export let inverted = false
  export let icon = false
  export let labeled = false
  export let borderless = false
  export { _class as class }

  function init(node: HTMLElement) {
    css(node, style)
  }
</script>

<div
  use:init
  class="ui menu {_class} {type} {attached && `${attached} attached`} {wide} {size}"
  class:item
  class:fluid
  class:compact
  class:fixed
  class:stackable
  class:inverted
  class:icon
  class:labeled
  class:borderless
>
  <slot />
</div>

<style global>
  @import '../../../fomantic/dist/components/menu.css';
</style>
