<script lang="ts">
  import { css } from '../../utils/css'

  export let _class: string = ''
  export let attached: string
  export let active: boolean = false
  export let segment: boolean = false
  export let data: string = ''
  export let style: {} = {}
  export { _class as class }
</script>

<div
  use:css="{style}"
  class=" ui tab {_class} {attached && `${attached} attached`}"
  class:attached
  class:active
  class:segment
  data-tab="{data}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
