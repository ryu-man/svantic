<script>
  import '../../../fomantic/dist/components/statistic.css'
  import { css, classNames } from '../../utils'

  let _class = ''
  export { _class as class }
  export let columns = ''
  export let style = {}
</script>

<div
  use:css="{style}"
  class="{classNames([columns, 'columns'], 'ui statistics', _class)}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
