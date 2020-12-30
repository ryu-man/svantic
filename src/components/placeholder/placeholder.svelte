<script>
  import { css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let inverted = false
  export let style = {}
</script>

<div use:css="{style}" class:inverted class="ui placeholder {_class}">
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style global>
  @import '../../../fomantic/dist/components/placeholder.css';
</style>
