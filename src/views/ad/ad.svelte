<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/ad.css'
  import { classNames } from '../../utils'

  let _class
  export { _class as class }

  export let type
  export let size
  export let centered = false
  export let dataText

  function init(node) {
    dataText && (node.dataset.text = dataText)
  }
</script>

<div
  use:init
  class="{classNames('ui', _class, centered, size, type, 'ad')}"
></div>
