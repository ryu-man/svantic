<script>
  import '../../semantic/dist/components/transition.css'
  import '../../semantic/dist/components/emoji.css'

  import { classNames, css } from '../../utils'
  import { createEventDispatcher } from 'svelte'

  let _class = ''
  export { _class as class }
  export let style
  export let name
  export let disabled = false
  export let loading = false
  export let size
  export let link = false

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

<em
  use:css="{style}"
  use:init
  data-emoji="{name}"
  class="{classNames(_class, { disabled, loading, link }, size)}"></em>
