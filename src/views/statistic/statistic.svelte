<script>
  import { css, classNames } from '../../utils'

  let _class = ''
  export let style = {}
  export let color = ''
  export let size = ''
  export let floated
  export let stackable
  export let inverted
  export let horizontal

  export { _class as class }
</script>

<div
  use:css="{style}"
  class:inverted
  class:horizontal
  class="{classNames(_class, 'ui', color, size, {horizontal, inverted,floated,stackable}, 'statistic')}"
>
  <slot />
</div>
