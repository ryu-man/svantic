<script>
  // import '../../../semantic/dist/components/header.css'
  import { css, register } from '../../utils'

  let _class = ''
  export let style = {}
  export let on = {}
  export { _class as class }

  function init(node) {
    css(style)
    const unregister = register(node, on)
    return {
      destroy() {
        unregister()
      }
    }
  }
</script>

<h2 use:init class="ui header {_class}">
  <slot>
    <!-- optional fallback -->
  </slot>
</h2>
