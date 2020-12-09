<script lang="ts">
  import { register } from '../../utils/events'
  import { css } from '../../utils/css'

  let _class = ''
  export let link = ''
  export let type: string = 'card'
  export let color: string = ''
  export let column: string = ''
  export let floated: string = ''
  export let fluid: boolean = false
  export let raised: boolean = false
  export let inverted: boolean = false
  export let centered: boolean = false
  export let doubling: boolean = false
  export let stackable: boolean = false
  export let horizontal: boolean = false
  export let on = {}
  export let style: {}
  export { _class as class }

  let attrs = link == '' ? {} : { href: link }

  function init(node: HTMLElement, params?: {}) {
    css(node, style)
    const unregister = register(node, on)
    return {
      update() {},
      destroy() {
        unregister()
      }
    }
  }
</script>

<div
  use:init
  class="{_class} {color} {column} {floated + ' floated'} ui {type}"
  {...attrs}
  class:floated
  class:fluid
  class:horizontal
  class:raised
  class:centered
  class:inverted
  class:stackable
  class:doubling
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>

<style global>
  @import '../../../fomantic/dist/components/card.css';
</style>
