<script>
    import { css } from '../../utils'
    let _class = ''
    export { _class as class }
    export let style
  </script>
  
  <tr use:css="{style}" class="{_class}">
    <slot />
  </tr>