<script>
  import { css } from '../../utils/css'

  let _class = ''
  export { _class as class }
  export let columns = ''
  export let style = {}
</script>

<div
  use:css="{style}"
  class="{`ui statistics ${_class} ${columns && columns}`}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style global>
  @import '../../../fomantic/dist/components/statistic.css';
</style>
