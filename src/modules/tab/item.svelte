<script>
  import { css } from '../../utils'

  let _class
  export let data
  export let center = false
  export let active = false
  export let style
  export { _class as class }
  /**
   * @type {SemanticUI.DropdownSettings.Param}
   */

</script>

<div
  use:css="{style}"
  class:center
  class:active
  class="item {_class}"
  data-tab="{data}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
