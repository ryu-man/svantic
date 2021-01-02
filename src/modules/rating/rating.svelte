<script>
  import '../../../fomantic/dist/components/rating.css'
  import { css } from '../../utils'
  import Controller from './controller'

  let _class = ''
  export let style = {}
  export { _class as class }
  export let disabled = false
  export let color = ''
  export let size = ''
  export let icon
  export let rating = '0'
  export let maxRating = '5'
  export let onMount

  function init(node, params) {
    // the node has been mounted in the DOM
    css(style)
    let controller = new Controller(node)
    onMount?.(controller)
    return {
      destroy() {
        // the node has been removed from the DOM
        controller = null
      }
    }
  }
</script>

<!-- markup (zero or more items) goes here -->
<div
  use:init
  class:disabled
  class="{color} {size} ui rating {_class}"
  data-rating="{rating}"
  data-max-rating="{maxRating}"
></div>
