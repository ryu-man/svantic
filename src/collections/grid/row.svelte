<script>
  import { classNames, css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let style = {}
  export let equal = false
  export let centered = false
  export let type
  export let columns
  export let aligned
  export let visibility = ''
</script>

<div
  use:css="{style}"
  class:centered
  class="{classNames(
    visibility,
    [columns, `column`],
    [equal, 'equal width'],
    [aligned, `aligned`],
    type,
    'row',
    _class
  )}"
>
  <slot />
</div>
