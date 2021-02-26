<script>
  import { classNames, css } from '../../utils'

  let _class
  export let wide
  export let equal = false
  export let inline = false
  export let grouped = false
  export let style
  export { _class as class }
</script>

<div
  use:css="{style}"
  class="{classNames(_class, { wide, inline, equal, grouped }, 'fields')}"
>
  <slot />
</div>
