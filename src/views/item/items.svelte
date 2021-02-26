<script>
  import { classNames, css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let style
  export let unstackable = false
  export let divided = false
  export let relaxed = false
  export let link = false
  export let inverted = false
</script>

<div
  use:css="{style}"
  class="{classNames(
    _class,
    'ui',
    { unstackable, divided, relaxed, link, inverted },
    'items'
  )}"
>
  <slot />
</div>
