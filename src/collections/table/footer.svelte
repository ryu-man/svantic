<script>
    import { css } from '../../utils'
    let _class = ''
    export { _class as class }
    export let style
  </script>
  
  <footer use:css="{style}" class="{_class}">
    <slot />
  </footer>