<script>
  import Controller from './controller'
  let _class = ''
  export let style = {}
  export { _class as class }
  export let type = ''
  //disabled
  export let state = ''
  // black
  // pink
  // red
  // yellow
  // green
  // purple
  // blue
  // brown
  export let color = ''
  // mini
  // tiny
  // small
  // yellow
  // huge
  // massive
  export let size = ''
  export let maxRating = 1
  export let onmount = (controller) => {}
  function control(node, params) {
    // the node has been mounted in the DOM
    let controller = new Controller(node)
    onmount(controller)
    return {
      // update() {
      //   // the value of `bar` has changed
      // },

      destroy() {
        // the node has been removed from the DOM
        controller = null
      }
    }
  }
</script>

<!-- markup (zero or more items) goes here -->
<div
  use:control
  class="{_class} {type} {state} {color} {size} ui rating"
  data-max-rating="{maxRating}"
  style="{Object.entries(style)
    .map((e) => `${e[0]}:${e[1]}`)
    .join(';')}"
></div>

<style>
  /* your styles go here */
  /* @import './rating.css';*/
</style>
