<script>
  import { css } from '../../utils'

  let _class = ''
  export let data
  export let center = false
  export let style = {}
  export { _class as class }
</script>

<div use:css="{style}" class:center class="item {_class}" data-tab="{data}">
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
