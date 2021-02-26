<script>
  import '../../../semantic/dist/components/site.css'
  import '../../../semantic/dist/components/reset.css'
  import '../../../semantic/dist/components/breadcrumb.css'
  import { classNames, css, register } from '../../utils'

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
      }
    }
  }
</script>

<div class="{classNames(_class, 'ui', size, 'breadcrumb')}">
  <slot />
</div>
