<script>
  import '../../../fomantic/dist/components/tab.css'
  import { classNames, css } from '../../utils'

  export let _class = ''
  export { _class as class }
  export let attached = ''
  export let loading = false
  export let segment = false
  export let active = false
  export let style = {}
</script>

<div
  use:css="{style}"
  class:loading
  class:segment
  class:active
  class="{classNames([attached, 'attached'], 'ui tabular menu', _class)}"
>
  <slot name="item">
    <!-- optional fallback -->
  </slot>
</div>
<slot>
  <!-- optional fallback -->
</slot>

