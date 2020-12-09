<script>
  import { css } from '../../utils'

  let _class = ''
  export let style = {}
  export { _class as class }
  // your script goes here
  //cude
  //text
  export let type = ''

  function init(node) {
    // the node has been mounted in the DOM
    css(node, style)
  }
</script>

<div class=" ui shape {_class} {type}">
  <div class="sides">
    <slot>
      <!-- optional fallback -->
    </slot>
  </div>
</div>

<style global>
  @import '../../../fomantic/dist/components/shape.css';
</style>
