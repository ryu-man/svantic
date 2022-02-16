<script>
  import '../../semantic/dist/components/menu.css'

  import { classNames, css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let style = {}
  export let wide
  export let size
  export let item = false
  export let attached
  export let fluid = false
  export let compact = false
  export let fixed = false
  export let stackable = false
  export let inverted = false
  export let icon = false
  export let labeled = false
  export let borderless = false
  export let floated
  export let accordion = false
  export let secondary = false
  export let pointing = false
  export let tabular = false
  export let text = false
  export let vertical = false
  export let pagination = false
  export let header = false
</script>

<div
  use:css="{style}"
  class="{classNames(
    _class,
    'ui',
    wide,
    size,
    {
      fluid,
      compact,
      fixed,
      stackable,
      labeled,
      icon,
      borderless,
      inverted,
      attached,
      floated,
      accordion,
      secondary,
      pointing,
      tabular,
      text,
      vertical,
      pagination,
      header,
      item
    },
    'menu'
  )}"
>
  <slot />
</div>
