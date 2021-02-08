<script>
  import { css, classNames } from '../../utils'

  let _class = ''
  export { _class as class }
  export let total = 100
  export let percents = []
  export let style = {}
</script>

<div
  use:css="{style}"
  class="{classNames(_class, 'ui', 'multiple progress')}"
  data-total="{total}"
  data-percent="{percents.join(',')}"
>
  <slot></slot>
</div>
