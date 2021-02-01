<script>
  import '../../../semantic/dist/components/embed'
  import { css, register, } from '../../utils'
  import Controller from './controller'

  let _class = ''
  export { _class as class }
  export let style = {}
  export let data = {}
  export let on = {}
  export let settings = {}
  export let onMount

  let _data = {
    source: '',
    id: '',
    placeholder: '',
    ...data
  }

  function init(node, settings) {
    const unregister = register(node, on)
    let controller = new Controller(node, settings)
    onMount?.(controller)
    return {
      update() {},
      destroy() {
        unregister()
        controller = null
      }
    }
  }
</script>

<div
  use:init = {settings}
  use:css="{style}"
  class="{_class} ui embed"
  data-source="{_data.source}"
  data-id="{_data.id}"
  data-placeholder="{_data.placeholder}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style>
  /* @import './embed.css';*/
</style>
