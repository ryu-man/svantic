<script>
  import { onMount as onMounted } from 'svelte'
  import { css } from '../../utils'

  let _class
  export let data
  export let center = false
  export let active = false
  export let style
  export { _class as class }
  export let node

  onMounted(() => {})
</script>

<div
  bind:this="{node}"
  use:css="{style}"
  class:center
  class:active
  class="item {_class}"
  data-tab="{data}"
>
  <slot />
</div>
