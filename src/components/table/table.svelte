<script>
  import { css, classNames } from '../../utils'

  let _class = ''
  export let type = ''
  export let column = ''
  export let line = false
  export let basic = false
  export let fixed = false
  export let padded = false
  export let celled = false
  export let single = false
  export let compact = false
  export let striped = false
  export let sortable = false
  export let inverted = false
  export let veryBasic = false
  export let collapsing = false
  export let selectable = false
  export let unstackable = false
  export let style = {}
  export { _class as class }
</script>

<table
  use:css="{style}"
  class:celled
  class:compact
  class:striped
  class:collapsing
  class:padded
  class:sortable
  class:inverted
  class:selectable
  class:unstackable
  class:fixed
  class:single
  class:line
  class:very="{veryBasic}"
  class:basic="{basic || veryBasic}"
  class="{classNames(type, [column, 'column'], 'ui table', _class)}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</table>

<style global>
  @import '../../../fomantic/dist/components/table.css';
</style>
