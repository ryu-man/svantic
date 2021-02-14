<script>
  import { css } from '../../utils'
  let _class = ''
  export { _class as class }
  export let style
</script>

<tbody use:css="{style}" class="{_class}">
  <slot />
</tbody>
