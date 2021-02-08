<script>
  import { css, classNames } from '../../utils'

  export let _class = ''
  export { _class as class }
  export let attached
  export let active = false
  export let segment = false
  export let data = ''
  export let style = {}
</script>

<div
  use:css="{style}"
  data-tab="{data}"
  class="{classNames(_class, 'ui', { active, segment, attached }, 'tab')}"
>
  <slot />
</div>
