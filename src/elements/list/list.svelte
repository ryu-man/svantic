<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/list.min.css'

  import { classNames, css } from '../../utils'
  import { createEventDispatcher } from 'svelte'

  let _class = ''
  export { _class as class }
  export let aligned = ''
  export let floated = ''
  export let bulleted = false
  export let ordered = false
  export let link = false
  export let horizontal = false
  export let inverted = false
  export let selection = false
  export let animated = false
  export let relaxed = false
  export let divided = false
  export let celled = false
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
    {
      link,
      celled,
      ordered,
      relaxed,
      divided,
      bulleted,
      animated,
      selection,
      horizontal,
      inverted,
      floated,
      aligned
    },
    'list'
  )}"
>
  <slot />
</div>
