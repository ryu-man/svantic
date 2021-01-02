<script>
  import '../../../fomantic/dist/components/sticky.css'
  import { css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let style = {}
</script>

<div
use:css = {style}
  class="ui sticky {_class}"
  
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
