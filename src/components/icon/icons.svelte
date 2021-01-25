<script>
  import { css, classNames } from '../../utils'

  export let size = ''
  export let style = {}
  let _class = ''
  export { _class as class }
</script>

<i use:css="{style}" class="{classNames(size,'icons',_class)}">
  <slot />
</i>
