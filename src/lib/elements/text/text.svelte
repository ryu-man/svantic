<script>
  import '../../../../semantic/dist/components/site.min.css'
  import '../../../../semantic/dist/components/reset.min.css'
  import '../../../../semantic/dist/components/transition.min.css'
  import '../../../../semantic/dist/components/text.min.css'

  import { createEventDispatcher } from 'svelte'
  import { classNames, css } from '../../utils'

  let _class
  export let style
  export { _class as class }

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

<span use:css="{style}" use:init class="{classNames(_class, 'ui text')}">
  <slot />
</span>
