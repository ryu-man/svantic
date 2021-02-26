<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/grid.min.css'
  import '../../../semantic/dist/components/icon.min.css'
  import '../../../semantic/dist/components/input.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/table.min.css'
  import '../../../semantic/dist/components/popup.min.css'
  import '../../../semantic/dist/components/calendar.min.css'

  import { css, register } from '../../utils'
  import Controller from './controller'

  let _class = ''
  export let icon = 'left'
  export let disabled = false
  export let settings = {}

  export let style = {}
  export let on = {}

  export let onMount
  export { _class as class }

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

<div use:module="{settings}" class="{_class} ui calendar" class:disabled>
  <div class="ui input {icon + ' icon'}">
    <slot>
      <i class="calendar icon"></i>
    </slot>
    <input type="text" placeholder="Date/Time" />
  </div>
</div>
