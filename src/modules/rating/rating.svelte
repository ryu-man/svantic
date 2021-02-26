<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/rating.min.css'
  import { css } from '../../utils'
  import Controller from './controller'

  let _class
  export let style
  export { _class as class }
  export let disabled = false
  export let color = ''
  export let size = ''
  export let icon
  export let rating = '0'
  export let maxRating = '5'
  export let settings = {}
  export let onMount

  function module(node, settings) {
    // the node has been mounted in the DOM
    css(style)

    let controller = new Controller(node, settings)
    onMount?.(controller)

    return {
      // the node has been removed from the DOM
      destroy() {
        controller.destroy()
        controller = null
      }
    }
  }
</script>

<div
  use:module="{settings}"
  class:disabled
  class="{color} {size} ui rating {_class}"
  data-rating="{rating}"
  data-max-rating="{maxRating}"
></div>
