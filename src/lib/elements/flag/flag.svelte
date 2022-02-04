<script>
  import '../../semantic/dist/components/transition.min.css'
  import '../../semantic/dist/components/flag.min.css'
  import { classNames, css } from '../../utils'
import { createEventDispatcher } from 'svelte';

  let _class = ''
  export { _class as class }
  export let style
  export let isoCode = ''

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

<i use:init use:css="{style}" class="{classNames(_class, isoCode, 'flag')}"></i>
