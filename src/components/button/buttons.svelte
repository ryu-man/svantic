<script>
  import { css } from '../../utils'

  export let color = ''
  export let style= {}
  let _class = ''
  export { _class as class }
</script>

<div use:css="{style}" class="{_class} {color} ui buttons">
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style global>
  @import '../../../fomantic/dist/components/button.css';
</style>
