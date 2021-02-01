<script>
  import '../../../semantic/dist/components/card.css'
  import { register } from '../../utils/events'
  import { css } from '../../utils'

  let _class = ''
  export let link = ''
  export let type = 'card'
  export let color = ''
  export let column = ''
  export let floated = ''
  export let fluid = false
  export let raised = false
  export let inverted = false
  export let centered = false
  export let doubling = false
  export let stackable = false
  export let horizontal = false
  export let on = {}
  export let style = {}
  export { _class as class }

  let attrs = {}
  link && (attrs = { href: link })

  function init(node) {
    css(node, style)
    const unregister = register(node, on)
    return {
      destroy() {
        unregister()
      }
    }
  }
</script>

<div
  use:init
  class:fluid
  class:horizontal
  class:raised
  class:centered
  class:inverted
  class:stackable
  class:doubling
  class="{color} {column} {floated && `${floated} floated`}  ui {type} {_class}"
  {...attrs}
>
  <slot />
</div>
