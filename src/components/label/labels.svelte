<script>
  import { classNames, css, register } from '../../utils'

  export let style = {}
  export let size = ''
  export let color = ''
  export let basic = false
  export let tag = false
  export let circular = false
  export let inverted = false
  let _class = ''
  export { _class as class }
</script>

<div
  use:css="{style}"
  class:basic
  class:tag
  class:circular
  class:inverted
  class="{classNames(size, color, 'ui labels', _class)}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style global>
  @import '../../../fomantic/dist/components/label.css';
</style>
