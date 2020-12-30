<script>
  import { register } from '../../utils/events.js'
  import { css } from '../../utils'
  import Controller from './controller'

  let _class = ''
  export let icon = 'left'
  export let disabled = false
  export let style = {}
  export let on= {}

  export let onmount: (controller: Controller) => void = () => {}
  export { _class as class }

  function init(node) {
    css(node, style)
    const unregister = register(node, on)
    let controller = new Controller(node)
    onmount(controller)
    return {
      update() {},
      destroy() {
        unregister()
        controller = null
      }
    }
  }
</script>

<div
  use:init
  class="{_class} ui calendar"
  class:disabled
>
  <div class="ui input {icon + ' icon'}">
    <slot name="icon">
      <!-- optional fallback -->
    </slot>
    <input type="text" placeholder="Date/Time" />
  </div>
</div>

<style>
  /* @import './calendar.css';*/
</style>
