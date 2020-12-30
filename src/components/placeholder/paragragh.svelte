<script>
  import { css } from '../../utils'
  let _class = ''
  export { _class as class }
  export let style = {}
</script>

<div use:css={style} class="paragraph {_class}">
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
