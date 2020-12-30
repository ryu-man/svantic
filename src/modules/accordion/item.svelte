<script>
  import { css } from '../../utils'
  export let style
</script>

<div class="active title">
  <slot name="title">
    <!-- optional fallback -->
  </slot>
</div>
<div class="active content">
  <slot name="content">
    <!-- optional fallback -->
  </slot>
</div>
