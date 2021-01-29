<script>
  import { css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let style = {}
  //visible
  //hidden
  export let state = ''
</script>

<div use:css="{style}" class="{state} content {_class} ">
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
