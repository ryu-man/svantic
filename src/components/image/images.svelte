<script>
  import '../../../fomantic/dist/components/image.css'
  import { css } from '../../utils'

  export let size = ''
  export let style = {}
  let _class = ''
  export { _class as class }

</script>

<div use:css={style} class="{size} ui images {_class}">
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
