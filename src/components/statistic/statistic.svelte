<script lang="ts">
  import { css } from '../../utils/css'

  let _class = ''
  export let style = {}
  export let color = ''
  export let size = ''
  export let floated: string
  export let stackable: boolean
  export let inverted: boolean
  export let horizontal: boolean

  export { _class as class }
</script>

<div
  use:css="{style}"
  class="{`ui statistic ${_class} ${color} ${size} ${floated && floated + ' floated'} ${stackable && 'stackable'} ${inverted && 'inverted'} ${horizontal && 'horizontal'}`.replaceAll(' +', ' ')}"
>
  <slot />
</div>

<style global>
  @import '../../../fomantic/dist/components/statistic.css';
</style>
