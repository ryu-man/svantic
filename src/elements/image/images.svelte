<script>
  import { css, classNames } from '../../utils'

  export let size = ''
  export let style = {}
  let _class = ''
  export { _class as class }
</script>

<div use:css="{style}" class="{classNames(size, 'ui images', _class)}">
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
