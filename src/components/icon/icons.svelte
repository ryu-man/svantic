<script>
  import { css } from '../../utils'

  export let size = ''
  export let style = {}
  let _class = ''
  export { _class as class }
</script>

<i use:css="{style}" class="{size} icons {_class}">
  <slot>
    <!-- optional fallback -->
  </slot>
</i>

<style global>
  @import '../../../fomantic/dist/components/icon.css';
</style>
