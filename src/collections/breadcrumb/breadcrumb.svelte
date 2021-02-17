<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/breadcrumb.css';
  import { css,register } from '../../utils'

  
  let _class = ''
  export let style = {}
  export let size
  export { _class as class }
  export let on = {}

  function init(node) {
    css(node, style)
    const unregister = register(node, on)
    return {
      update(params) {},
      destroy() {
        unregister()
        console.log('Button has been destroyed')
      }
    }
  }
</script>

<div class="{size} ui breadcrumb {_class}">
  <slot>
    
  </slot>
</div>
