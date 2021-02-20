<script>
  import { css, classNames } from '../../utils'
  let _class = ''
  export { _class as class }
  export let style
  export let positive = false
  export let negative = false
  export let error = false
  export let warning = false
  export let active = false
  export let disabled = false
  export let color
  export let marked
</script>

<tr
  use:css="{style}"
  class="{classNames(_class, { marked }, color)}"
  class:positive
  class:negative
  class:error
  class:warning
  class:active
  class:disabled
>
  <slot />
</tr>
