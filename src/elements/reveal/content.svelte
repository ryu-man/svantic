<script>
  import { classNames, css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let style = {}
  //visible
  //hidden
  export let state = ''
</script>

<div use:css="{style}" class="{classNames(_class, state, 'content')}">
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
