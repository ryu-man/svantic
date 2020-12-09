<script>
  let _class = ''
  export let style = {}
  //fade
  //move
  //rotate
  export let type = ''
  //up
  //down
  //left
  //right
  export let direction = ''
  //active
  //disabled
  export let state = ''
  export let instant = false

  export { _class as class }

  function init(node) {
    css(node, style)
  }
</script>

<div
  use:init
  class=" ui reveal {_class} {type} {direction} {state}"
  class:instant
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
<style global>
  @import '../../../fomantic/dist/components/reveal.css';
</style>