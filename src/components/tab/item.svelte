<script lang="ts">
  import { css } from '../../utils'

  let _class = ''
  export let data
  export let center = false
  export let style = {}
  export { _class as class }
</script>

<div use:css="{style}" class="{_class} item" class:center data-tab={data}>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
