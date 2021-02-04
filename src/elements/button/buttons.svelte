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
  class="{classNames('ui', [labeled, 'labeled'], { icon, vertical, basic }, color, size, width, _class, 'buttons')}"
>
  <slot />
</div>
