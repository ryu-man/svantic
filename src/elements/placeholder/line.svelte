<script>
  import { classNames, css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let style
  export let length
  export let fluid = false
</script>

<div
  use:css = {style}
  class="{classNames(_class,{fluid, length},'line')}"
></div>
