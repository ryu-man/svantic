<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/card.css'
  import { classNames, css, register } from '../../utils'

  let _class
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
  export let style
  export { _class as class }

  let attrs = {}
  link && (attrs = { href: link })

  function init(node) {
    const unregister = register(node, on)
    return {
      destroy() {
        unregister()
      }
    }
  }
</script>

<div
  use:css="{style}"
  use:init
  class="{classNames(
    _class,
    'ui',
    {
      fluid,
      horizontal,
      raised,
      centered,
      stackable,
      doubling,
      inverted,
      floated
    },
    color,
    column,
    type
  )}"
  {...attrs}
>
  <slot />
</div>
