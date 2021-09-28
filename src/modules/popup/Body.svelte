<script>
  import { css, classNames } from '../../utils'

  let _class = ''
  export { _class as class }
</script>

<div class="{classNames(_class, 'ui popup')}">
  <slot />
</div>
