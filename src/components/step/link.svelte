<script lang="ts">
  import { css } from '../../utils'

  let _class: string = ''
  export let completed: boolean = false
  export let active: boolean = false
  export let link: boolean = false
  export let disabled: boolean = false
  export let style = {}
  export { _class as class }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a
  use:css="{style}"
  class=" ui step {_class}"
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
