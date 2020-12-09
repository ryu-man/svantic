<script>
  import { css } from '../../utils'

  let _class = ''
  export let inverted = false
  export let style = {}
  export { _class as class }
</script>

<div use:css="{style}" class="ui placeholder {_class}" class:inverted>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style global>
  @import '../../../fomantic/dist/components/placeholder.css';
</style>
