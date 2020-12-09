<script lang="ts">
  import { css } from '../../utils'
  let _class: string = ''
  export let type: string = ''
  export let side: string = ''
  export let size: string = ''
  export let wide: string = ''
  export let attached: string = ''
  export let ordered: boolean = false
  export let vertical: boolean = false
  export let tablet: boolean = false
  export let stackable: boolean = false
  export let fluid: boolean = false
  export let unstackable: boolean = false
  export let inverted: boolean = false
  export { _class as class }
  export let style = {}
</script>

<div
  use:css="{style}"
  class=" ui steps {_class} {type} {side} {size} {wide} {attached}"
  class:ordered
  class:vertical
  class:tablet
  class:stackable
  class:fluid
  class:unstackable
  class:attached
  class:inverted
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style global>
  @import '../../../fomantic/dist/components/step.css';
</style>
