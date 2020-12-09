<script lang="ts">
  import { css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let style = {}
</script>

<div
use:css = {style}
  class="{_class} ui sticky"
  
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style global>
  @import '../../../fomantic/dist/components/sticky.css';
</style>
