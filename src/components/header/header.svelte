<script>
  import { register } from '../../utils/events'

  let _class = ''
  export let style = {}
  export let attached = ''
  export let floated = ''
  export let aligned = ''
  export let icon = false
  export let sub = false
  export let disabled = false
  export let dividing = false
  export let block = false
  export let inverted = false
  export let on = {}
  export { _class as class }

  function init(node) {
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
  class="{_class} {attached} {floated} {aligned} ui header"
  class:icon
  class:sub
  class:disabled
  class:dividing
  class:block
  class:attached="{attached != ''}"
  class:floated="{floated != ''}"
  class:aligned="{aligned != ''}"
  class:inverted
  style="{Object.entries(style)
    .map((e) => `${e[0]}:${e[1]}`)
    .join(';')}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style global>
  @import '../../../fomantic/dist/components/header.css';
</style>
