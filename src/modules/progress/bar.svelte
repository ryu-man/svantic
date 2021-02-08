<script>
  import { classNames, css } from '../../utils'
  import { register } from '../../utils/events'

  let _class = ''
  export { _class as class }
  export let color = ''
  export let inverted = false
  export let progress = false
  export let on = {}
  export let style = {}

  function module(node, params) {
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

<div use:module class="{classNames(_class, color, { inverted }, 'bar')}" on:click>
  {#if progress}
    <div class="progress"></div>
  {/if}
</div>
