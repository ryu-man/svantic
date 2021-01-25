<script>
  import { classNames, css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let style = {}
  export let aligned
  export let floated
  export let wide
  export let color = ''
  export let doubling = false
  export let visibility = ''

  $: _wide = wide?.join?.(' ') ?? wide
</script>

<div
  use:css="{style}"
  class:doubling
  class="{classNames(
    visibility,
    [aligned, 'aligned'],
    [floated, 'floated'],
    [_wide, 'wide'],
    color,
    'column',
    _class
  )}"
>
  <slot />
</div>
