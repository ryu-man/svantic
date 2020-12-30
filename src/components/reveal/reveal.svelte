<script>
  import { classNames, css } from '../../utils'

  let _class = ''
  export { _class as class }
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
</script>

<div
  use:css="{style}"
  class:instant
  class="{classNames(state, direction, type, 'ui reaveal', _class)}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style global>
  @import '../../../fomantic/dist/components/reveal.css';
</style>
