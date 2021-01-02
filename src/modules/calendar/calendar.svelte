<script>
  import '../../../fomantic/dist/components/calendar.css'
  import { css, register } from '../../utils'
  import Controller from './controller'

  let _class = ''
  export let icon = 'left'
  export let disabled = false
  export let style = {}
  export let on = {}

  export let onMount
  export { _class as class }

  function init(node) {
    css(node, style)
    const unregister = register(node, on)
    let controller = new Controller(node)
    onMount?.(controller)
    return {
      update() {},
      destroy() {
        unregister()
        controller = null
      }
    }
  }
</script>

<div use:init class="{_class} ui calendar" class:disabled>
  <div class="ui input {icon + ' icon'}">
    <slot name="icon">
      <!-- optional fallback -->
    </slot>
    <input type="text" placeholder="Date/Time" />
  </div>
</div>
