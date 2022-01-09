<script>
  import { css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let style = {}
</script>

<div use:css="{style}" class="ui dimmable dimmed {_class} ">
  <div class="ui simple dimmer"></div>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style>
</style>
