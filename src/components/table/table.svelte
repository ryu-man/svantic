<script lang="ts">
  import { css } from '../../utils/css'
  import { register } from '../../utils/events'

  let _class: string = ''
  export let type: string = ''
  export let column: string = ''
  export let line: boolean = false
  export let basic: boolean = false
  export let fixed: boolean = false
  export let padded: boolean = false
  export let celled: boolean = false
  export let single: boolean = false
  export let compact: boolean = false
  export let striped: boolean = false
  export let sortable: boolean = false
  export let inverted: boolean = false
  export let veryBasic: boolean = false
  export let collapsing: boolean = false
  export let selectable: boolean = false
  export let unstackable: boolean = false
  export let on: {} = {}
  export let style: {} = {}
  export { _class as class }

  function init(node: HTMLElement, params?: {}) {
    // the node has been mounted in the DOM
    css(node, style)
    const unregister = register(node, on)
    return {
      // the node has been removed from the DOM
      destroy() {
        unregister()
      }
    }
  }
</script>

<table
  use:init
  class="ui table {_class} {type} {column && `${column} column`} {veryBasic && 'very'} {(veryBasic || basic) && 'basic'} {type}"
  class:celled
  class:compact
  class:striped
  class:collapsing
  class:padded
  class:sortable
  class:inverted
  class:selectable
  class:unstackable
  class:fixed
  class:single
  class:line
>
  <slot>
    <!-- optional fallback -->
  </slot>
</table>

<style global>
  @import '../../../fomantic/dist/components/table.css';
</style>
