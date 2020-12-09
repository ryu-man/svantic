<script lang="ts">
  import { css } from '../../utils/css'
  import { register } from '../../utils/events'
  import Controller from './controller'

  let _class: string = ''
  export { _class as class }
  export let type: string = 'toast'
  export let color: string = ''
  export let icon: boolean = false
  export let style: {} = {}
  export let on: {} = {}
  export let onmount: (controller: Controller) => void = () => {}

  function init(node: HTMLElement) {
    // the node has been mounted in the DOM
    css(node, style)
    const unregister = register(node, on)
    let controller = new Controller(node)
    onmount(controller)
    return {
      // the node has been removed from the DOM
      destroy() {
        unregister()
        controller = null
      }
    }
  }
</script>

<div use:init class="{_class} {color} ui {type}" class:icon>
  <slot />
</div>

<style global>
  @import '../../../fomantic/dist/components/toast.css';
</style>
