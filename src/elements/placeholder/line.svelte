<script>
  import { classNames } from '../../utils'

  let _class = ''
  export { _class as class }
  export let length
  export let fluid = false
</script>

<div
  class="{classNames(_class,{fluid, length},'line')}"
></div>
