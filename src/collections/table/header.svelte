<script>
    import { css, classNames } from '../../utils'
    let _class = ''
    export { _class as class }
    export let style
    export let fullWidth
  </script>

  <thead use:css="{style}" class="{classNames(_class, { 'full-width': fullWidth })}">
    <slot />
  </thead>