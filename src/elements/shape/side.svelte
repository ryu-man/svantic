<script>
  import { classNames, css } from '../../utils'

  let _class = ''
  export let style = {}
  export { _class as class }
</script>

<div use:css="{style}" class="{classNames("side", _class)}">
  <slot />
</div>
