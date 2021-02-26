<script>
  import { classNames, css } from '../../utils'

  let _class
  export let wide
  export let state
  export let inline = false
  export let disabled = false
  export let required = false
  export let style
  export { _class as class }
</script>

<div
  use:css="{style}"
  class="{classNames(
    _class,
    { wide, inline, disabled, required },
    state,
    'field'
  )}"
>
  <slot />
</div>

<style>
</style>
