<script>
  import { css, classNames } from '../../utils'

  let _class
  export { _class as class }
  export let column
  export let style
</script>

<div
  use:css="{style}"
  class="{classNames(_class, 'ui',{column}, 'ui statistics', _class)}"
>
  <slot/>
</div>
