<script>
  import { classNames, css } from '../../utils'
  let _class = ''
  export { _class as class }
  export let style

  function init(node) {
    const unregister = register(node, on)

    return {
      destroy() {
        unregister()
      }
    }
  }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a use:css="{style}" use:init class="{classNames(_class, 'ui tag label')}">
  <slot>
    <!-- optional fallback -->
  </slot>
</a>
