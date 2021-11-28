<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/shape.min.css'

  import { classNames, css } from '../../utils'
  import { createEventDispatcher } from 'svelte'

  export let style = {}
  let _class = ''
  export { _class as class }
  // your script goes here
  //cude
  //text
  export let type = ''

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

<div
  use:css="{style}"
  use:init
  class="{classNames(_class, 'ui', type, 'shape')}"
>
  <div class="sides">
    <slot>
      <!-- optional fallback -->
    </slot>
  </div>
</div>
