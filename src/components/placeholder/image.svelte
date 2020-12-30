<script>
  import { css } from '../../utils'

  export let header = false
  export let square = false
  export let style = {}
</script>

<div use:css="{style}" class:header class:square class="image">
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
