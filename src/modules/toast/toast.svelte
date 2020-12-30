<script>
  import { css, register } from '../../utils'
  import Controller from './controller'

  let _class = ''
  export { _class as class }
  export let type = 'toast'
  export let color = ''
  export let icon = false
  export let style = {}
  export let on = {}
  export let onMount

  function init(node) {
    // the node has been mounted in the DOM
    css(node, style)
    const unregister = register(node, on)
    let controller = new Controller(node)
    onMount?.(controller)
    return {
      // the node has been removed from the DOM
      destroy() {
        unregister()
        controller = null
      }
    }
  }
</script>

<div use:init class:icon class="{color} ui {type} {_class}">
  <slot />
</div>

<style global>
  @import '../../../fomantic/dist/components/toast.css';
</style>
