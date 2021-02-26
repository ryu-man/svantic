<script>
  import { classNames, css } from '../../utils'

  export let type = ''
  export let style = {}
  let _class = ''
  export { _class as class }
</script>

<div use:css="{style}" class="{classNames(_class, 'ui', type, 'segments')}">
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
