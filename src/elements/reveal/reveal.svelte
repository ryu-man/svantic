<script>
  import '../../../fomantic/dist/components/reveal.css'
  import { classNames, css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let style = {}
  export let type = ''
  export let direction = ''
  export let state = ''
  export let instant = false
</script>

<div
  use:css="{style}"
  class:instant
  class="{classNames(state, direction, type, 'ui reaveal', _class)}"
>
  <slot />
</div>
