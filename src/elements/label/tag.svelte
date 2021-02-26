<script>
  import { classNames, css } from '../../utils'
  let _class = ''
  export { _class as class }

  function init(node) {
    css(node, style)
    const unregister = register(node, on)

    return {
      destroy() {
        unregister()
      }
    }
  }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a use:init class="{classNames(_class, 'ui tag label')}">
  <slot>
    <!-- optional fallback -->
  </slot>
</a>
