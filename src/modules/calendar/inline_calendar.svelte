<script>
  import '../../../fomantic/dist/components/calendar.css'
  import { register } from '../../utils/events.js'
  import { css } from '../../utils'
  import Controller from './calendar.js'

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

<div
  use:init
  class="{_class} ui calendar"
  id="inline_calendar"
  style="{Object.entries(style)
    .map((e) => `${e[0]}:${e[1]}`)
    .join(';')}"
></div>
