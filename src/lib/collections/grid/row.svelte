<script>
  import { classNames, css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let style = {}
  export let equal = false
  export let centered = false
  export let type
  export let column
  export let aligned
  export let visibility = ''
</script>

<div
  use:css="{style}"
  class:centered
  class="{classNames(
    _class,
    visibility,
    { column, equal, aligned },
    type,
    'row'
  )}"
>
  <slot />
</div>
