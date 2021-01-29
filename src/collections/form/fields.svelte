<script>
  import { css } from '../../utils'

  let _class = ''
  export let wide = ''
  export let equal = false
  export let inline = false
  export let grouped = false
  export let style= {}
  export { _class as class }

</script>

<div
  use:css={style}
  class="{_class} {wide && wide + ' wide'} fields"
  class:inline
  class:equal
  class:grouped
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
