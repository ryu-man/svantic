<script>
  import { css } from '../../utils'

  let _class = ''
  export let style = {}
  export { _class as class }
</script>

<span use:css="{style}" class="{_class} ui text">
  <slot>
    <!-- optional fallback -->
  </slot>
</span>


<style global>
  @import '../../../fomantic/dist/components/text.css';
</style>
