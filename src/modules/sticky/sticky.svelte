<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/sticky.css'
  import Controller from './controller'

  export let settings = {}
  export let onMount

  function module(node, settings) {
    const controller = new Controller(node, settings)
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

<div use:module="{settings}" class="ui sticky">
  <slot />
</div>
