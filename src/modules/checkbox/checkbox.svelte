<script>
  import '../../../fomantic/dist/components/checkbox'
  import '../../../fomantic/dist/components/checkbox.css'
  import { classNames, css } from '../../utils'
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

  function init(node, settings) {
    css(node, style)
    const unregister = register(node, on)
    let controller = new Controller(node, settings)
    onMount?.(controller)
    return {
      destroy() {
        unregister()
        controller = null
      }
    }
  }
</script>

<div
  use:init="{settings}"
  class="{classNames(
    'ui',
    type,
    state,
    [fitted, 'fitted'],
    [inverted, 'inverted'],
    'checkbox',
    _class
  )}"
>
  <input type="checkbox" name="example" />
  <slot>
    <label></label>
  </slot>
</div>
