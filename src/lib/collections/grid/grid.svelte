<script>
  import '../../../../semantic/dist/components/site.min.css'
  import '../../../../semantic/dist/components/reset.min.css'
  import '../../../../semantic/dist/components/grid.min.css'
  import { classNames } from '../../utils'

  export let equal = false
  export let centered = false
  export let container = false
  export let stackable = false
  export let very = false
  export let relaxed = false
  export let columns
  export let divided = false | ''
  export let celled = false | ''
  export let reversed
</script>

<div
  class="{classNames(
    'ui',
    {
      reversed,
      equal,
      divided,
      celled,
      columns,
      centered,
      stackable,
      very,
      relaxed
    },
    'grid'
  )}"
  class:container
>
  <slot />
</div>
