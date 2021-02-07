<script>
  import '../../../semantic/dist/components/grid.css'
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
  class="{classNames('ui',
    [reversed, 'reversed'],
    [equal, 'equal width'],
    [divided, 'divided'],
    [celled, 'celled'],
    [columns, 'column'],
    {centered, stackable, very, relaxed},
    'grid'
  )}"
  class:container
>
  <slot />
</div>
