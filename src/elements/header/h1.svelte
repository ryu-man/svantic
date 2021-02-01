<script>
  import { css, register } from '../../utils'

  let _class = ''
  export let style = {}
  export let on = {}
  export { _class as class }

  function init(node) {
    css(node, style)
  }
</script>

<h1 use:init class="ui header {_class}">
  <slot />
</h1>
