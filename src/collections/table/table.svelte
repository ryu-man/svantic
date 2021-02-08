<script>
  import '../../../semantic/dist/components/table.css'
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
  export let very = false
  export let collapsing = false
  export let selectable = false
  export let unstackable = false
  export let style = {}
  export { _class as class }
</script>

<table
  use:css="{style}"
  class="{classNames(
    _class,
    'ui',
    type,
    {
      column,
      celled,
      compact,
      striped,
      collapsing,
      padded,
      sortable,
      inverted,
      selectable,
      unstackable,
      fixed,
      single,
      line,
      very,
      basic
    },
    'table'
  )}"
>
  <slot />
</table>
