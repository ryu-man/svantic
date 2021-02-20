<script>
  import { css, classNames } from '../../utils'
  let _class
  export { _class as class }
  export let style
  export let direction
  export let open
  export let scrolling
</script>

<div
  use:css="{style}"
  class="{classNames(_class, direction, { open, scrolling }, 'menu')}"
>
  <slot />
</div>
