<script>
    import { css, classNames } from '../../utils'
    let _class = ''
    export { _class as class }
    export let style
    export let sorted
  </script>
  
  <th use:css="{style}" class="{classNames(_class, sorted)}">
    <slot />
  </th>