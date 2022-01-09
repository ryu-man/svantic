<script>
  import '../../../../semantic/dist/components/site.min.css'
  import '../../../../semantic/dist/components/reset.min.css'
  import '../../../../semantic/dist/components/ad.min.css'
  
  import { classNames, css } from '../../utils'
  import { createEventDispatcher } from 'svelte';

  let _class
  export { _class as class }
  export let style
  export let type
  export let size
  export let centered = false
  export let dataText

  const dispatch = createEventDispatcher()
  function init(node) {
    dataText && (node.dataset.text = dataText)
    dispatch('mount', node)
  }
</script>

<div
  use:css={style}
  use:init
  class="{classNames('ui', _class, centered, size, type, 'ad')}"
></div>
