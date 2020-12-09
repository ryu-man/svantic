<script lang="ts">
  import { css } from '../../utils/css'

  let _class = ''
  export let style = {}
  export { _class as class }

  function init(node: HTMLElement, params?: {}) {
    css(node, style)
  }
</script>

<div class="{_class} ui dimmable dimmed">
  <div class="ui simple dimmer"></div>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style>
</style>
