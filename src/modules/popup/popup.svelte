<script>
  import '../../../fomantic/dist/components/popup'
  import '../../../fomantic/dist/components/popup.css'
  import { css, classNames } from '../../utils'
  import Controller from './controller'
  
  let _class = ''
  export { _class as class }
  export let style = {}
  export let settings = {}
  export let onMount

  function init(node, settings) {
    css(node, style)
    let controller = new Controller(node, settings)
    onMount?.(controller)
  }
</script>

<div use:init="{settings}" class="{classNames('ui popup', _class)}">
  <slot />
</div>
