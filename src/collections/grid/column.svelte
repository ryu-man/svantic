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
  class="{classNames(
    _class,
    doubling,
    visibility,
    {
      aligned,
      floated
    },
    _wide,
    color,
    'column'
  )}"
>
  <slot />
</div>
