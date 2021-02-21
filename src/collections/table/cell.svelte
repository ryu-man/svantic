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
  export let selectable = false
  export let collapsing = false
  export let wide
  export let textAlign
  export let verticalAlign
  export let singleLine = false
</script>

<td
  use:css="{style}"
  class="{classNames(
    _class,
    {
      marked,
      selectable,
      collapsing,
      wide,
      'single line': singleLine,
      aligned: verticalAlign
    },
    { aligned: textAlign },
    color
  )}"
  class:positive
  class:negative
  class:error
  class:warning
  class:active
  class:disabled
>
  <slot />
</td>
