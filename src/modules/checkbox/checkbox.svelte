<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/checkbox.min.css'
  import { classNames, css, register } from '../../utils'
  import Controller from './controller'

  let _class = ''
  export { _class as class }
  export let style = {}
  export let settings = {}
  export let id
  export let type = ''
  export let state = ''
  export let fitted = false
  export let inverted = false
  export let onMount

  function module(node, settings) {
    css(node, style)
    const unregister = register(node, on)

    let controller = new Controller(node, settings)
    onMount?.(controller)

    return {
      // the node has been removed from the DOM
      destroy() {
        unregister()
        controller.destroy()
        controller = null
      }
    }
  }
</script>

<div
  use:module="{settings}"
  class="{classNames(
    _class,
    'ui',
    type,
    state,
    { fitted, inverted },
    'checkbox'
  )}"
>
  <input type="checkbox" name="" />
  <slot />
</div>
