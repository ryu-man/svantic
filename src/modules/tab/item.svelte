<script>
  import { css } from '../../utils'
  import { onMount as onMounted } from 'svelte'

  let _class
  export let data
  export let center = false
  export let active = false
  export let style
  export { _class as class }
  export let settings = {}
  export let executer

  executer.setSettings(settings)

  onMounted(() => {})
</script>

<div
  bind:this="{$executer}"
  use:css="{style}"
  class:center
  class:active
  class="item {_class}"
  data-tab="{data}"
>
  <slot />
</div>
