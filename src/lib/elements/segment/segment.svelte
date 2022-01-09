<script>
  import '../../../../semantic/dist/components/site.min.css'
  import '../../../../semantic/dist/components/reset.min.css'
  import '../../../../semantic/dist/components/transition.min.css'
  import '../../../../semantic/dist/components/segment.min.css'

  import { classNames, css } from '../../utils'
import { createEventDispatcher } from 'svelte';

  let _class = ''
  export { _class as class }
  export let raised = false
  export let placeholder = false
  export let stacked = false
  export let piled = false
  export let vertical = false
  export let loading = false
  export let disabled = false
  export let secondary = false
  export let tertiary = false
  export let floated
  export let attached
  export let aligned
  export let color = ''
  export let tall = false
  export let double = false
  export let inverted = false
  export let padded = false
  export let fitted = false
  export let compact = false
  export let circular = false
  export let clearing = false
  export let basic = false
  export let blurring = false
  export let dimmable = false
  export let dimmed = false
  export let container = false
  export let style = {}

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

<div
  use:css="{style}"
  use:init
  class="{classNames(
    _class,
    'ui',
    color,
    {
      tall,
      double,
      inverted,
      padded,
      fitted,
      compact,
      circular,
      clearing,
      basic,
      blurring,
      dimmable,
      dimmed,
      vertical,
      raised,
      stacked,
      piled,
      placeholder,
      loading,
      disabled,
      secondary,
      tertiary,
      floated,
      attached,
      aligned
    },
    'segment'
  )}"
  class:container
>
  <slot />
</div>
