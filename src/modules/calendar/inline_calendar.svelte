<script>
  import '../../../fomantic/dist/components/calendar.css'
  import { register } from '../../utils/events.js'
  import { css } from '../../utils'
  import Controller from './controller.js'

  let _class = ''
  export let style = {}
  export let onMount
  export let on = {}
  export { _class as class }

  function init(node) {
    css(node, style)
    const unregister = register(node, on)
    let controller = new Controller(node)
    onMount?.(controller)
    return {
      update(params) {},
      destroy() {
        unregister()
        controller = null
      }
    }
  }
</script>

<div use:init class="ui calendar {_class}" id="inline_calendar"></div>
