<script>
  import { css } from '../../utils'

  export let type = ''
  export let style = {}
  let _class = ''
  export { _class as class }

</script>

<div use:css={style} class="{_class} {type} ui segments">
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

