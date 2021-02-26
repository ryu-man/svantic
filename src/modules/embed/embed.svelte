<script>
  import '../../../semantic/dist/components/site.css'
  import '../../../semantic/dist/components/reset.css'
  import '../../../semantic/dist/components/transition.css'
  import '../../../semantic/dist/components/embed.css'
  import { css } from '../../utils'
  import Controller from './controller'

  let _class = ''
  export { _class as class }
  export let style = {}
  export let data = {}
  export let settings = {}
  export let onMount

  let _data = {
    source: '',
    id: '',
    placeholder: '',
    ...data
  }

  function module(node, settings) {
    let controller = new Controller(node, settings)
    onMount?.(controller)

    return {
      // the node has been removed from the DOM
      destroy() {
        controller.destroy()
        controller = null
      }
    }
  }
</script>

<div
  use:module="{settings}"
  use:css="{style}"
  class="{_class} ui embed"
  data-source="{_data.source}"
  data-id="{_data.id}"
  data-placeholder="{_data.placeholder}"
>
  <slot/>
</div>