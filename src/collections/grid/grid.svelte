<script>
  import '../../../fomantic/dist/components/grid.css'
  import { classNames } from '../../utils'

  export let equal = false
  export let centered = false
  export let container = false
  export let stackable = false
  export let reversed
</script>

<div
  class:centered
  class:stackable
  class="{classNames(
    [reversed, 'reversed'],
    [equal, 'equal width'],
    'ui grid'
  )}"
  class:container
>
  <slot />
</div>
