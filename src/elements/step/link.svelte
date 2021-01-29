<script>
  import { css } from '../../utils'

  let _class = ''
  export let completed = false
  export let active = false
  export let link = false
  export let disabled = false
  export let style = {}
  export { _class as class }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a
  use:css="{style}"
  class="ui step {_class}"
  class:completed
  class:active
  class:link
  class:disabled
>
  <slot>
    <!-- optional fallback -->
  </slot>
</a>

<style global>
  @import '../../../fomantic/dist/components/step.css';
</style>
