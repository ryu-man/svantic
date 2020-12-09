<script lang="ts">
  import { css } from '../../utils'

  export let _class = ''
  export let attached: string = ''
  export let loading = false
  export let segment = false
  export let active = false
  export let style: {} = {}
  export { _class as class }
</script>

<div
  use:css="{style}"
  class="ui tabular menu {_class} {attached && `${attached} attached`}"
  class:loading
  class:segment
  class:active
>
  <slot name="item">
    <!-- optional fallback -->
  </slot>
</div>
<slot>
  <!-- optional fallback -->
</slot>

<style global>
  @import '../../../fomantic/dist/components/tab.css';
</style>
