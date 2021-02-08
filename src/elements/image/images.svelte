<script>
  import { css, classNames } from '../../utils'

  export let size = ''
  export let style = {}
  let _class = ''
  export { _class as class }
</script>

<div use:css="{style}" class="{classNames(_class, 'ui', size, 'images')}">
  <slot />
</div>
