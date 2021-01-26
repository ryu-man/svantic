<script>
  import { classNames } from '../../utils'

  let _class = ''
  export { _class as class }
  export let short = false
  export let medium = false
  export let full = false
  export let long = false
  export let very = false
  export let fluid = false
</script>

<div
  class:short
  class:medium
  class:very
  class:full
  class:long
  class:fluid
  class="{classNames('line', _class)}"
></div>
