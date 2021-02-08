<script>
  import { css, classNames } from '../../utils'

  let _class = ''
  export { _class as class }
  export let color = ''
  export let icon = false
  export let vertical = false
  export let labeled
  export let basic = false
  export let size
  export let width
  export let style = {}
</script>

<div
  use:css="{style}"
  class="{classNames(
    _class,
    'ui',
    { icon, vertical, basic, labeled },
    color,
    size,
    width,
    'buttons'
  )}"
>
  <slot />
</div>
