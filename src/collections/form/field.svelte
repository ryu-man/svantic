<script>
  import { css } from '../../utils'

  let _class = ''
  export let wide = ''
  export let state = ''
  export let inline = false
  export let disabled = false
  export let required = false
  export let style= {}
  export { _class as class }
</script>

<div
  use:css={style}
  class="{_class} {wide && wide + ' wide'} {state} field"
  class:inline
  class:disabled
  class:required
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style>
</style>
