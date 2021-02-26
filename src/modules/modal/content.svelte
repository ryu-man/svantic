<script>
  import { classNames, css } from '../../utils'

  let _class
  export { _class as class }
  export let style
  export let image = false
  export let scrolling = false
</script>

<div
  use:css="{style}"
  class="{classNames(_class, { image, scrolling }, 'content')}"
>
  <slot />
</div>
