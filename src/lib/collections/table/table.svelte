<script>
  import '../../../../semantic/dist/components/site.min.css'
  import '../../../../semantic/dist/components/reset.min.css'
  import '../../../../semantic/dist/components/table.min.css'
  import { css, classNames } from '../../utils'

  let _class = ''
  export let definition = false
  export let structured = false
  export let column
  export let wide
  export let line = false
  export let basic = false
  export let fixed = false
  export let padded = false
  export let celled = false
  export let singleLine = false
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

  async function component(node) {
    if (sortable) {
      if (!window.jQuery) {
        window.jQuery = await import('jquery')
      }
      await import('./tablesort')
      jQuery(node).tablesort()
    }
  }
</script>

<table
  use:css="{style}"
  use:component
  class="{classNames(
    _class,
    'ui',
    {
      wide,
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
      'single line': singleLine,
      line,
      very,
      basic,
      definition,
      structured
    },
    'table'
  )}"
>
  <slot />
</table>
