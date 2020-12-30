<script>
  import { css, register, } from '../../utils'
  import Controller from './controller'

  let _class = ''
  export { _class as class }
  export let style = {}
  export let data = {}
  export let on = {}
  export let onMount

  let _data = {
    source: '',
    id: '',
    placeholder: '',
    ...data
  }

  function init(node) {
    const unregister = register(node, on)
    let controller = new Controller(node)
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
  use:init
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
