<script>
  import { css } from '../../utils'

  let _class = ''
  export let style = {}
  export { _class as class }

</script>

<div use:css={style} class="side {_class}">
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
