<script>
  import { classNames, css, register } from '../../utils'

  let _class
  export let style
  export { _class as class }
  export let active = false
  export let on = {}

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

<div use:init class="{classNames(_class, { active }, 'section')}">
  <slot />
</div>
