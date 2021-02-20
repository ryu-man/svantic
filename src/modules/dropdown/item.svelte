<script>
  import { css, classNames } from '../../utils'
  let _class
  export { _class as class }
  export let style
  export let value
</script>

<div
  use:css="{style}"
  class="{classNames(_class, 'item')}"
  data-value="{value}"
>
  <slot />
</div>
