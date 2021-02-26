<script>
  import { classNames, css } from '../../utils'

  let _class
  export { _class as class }
  export let style
  export let text
</script>

<div
  use:css="{style}"
  class="{classNames(_class, 'or')}"
  data-text="{text}"
></div>
