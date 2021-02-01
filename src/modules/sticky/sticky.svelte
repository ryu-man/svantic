<script>
  import '../../../semantic/dist/components/sticky.css'
  import Controller from './controller'

  export let settings = {}
  export let onMount

  function init(node, settings) {
    const controller = new Controller(node, settings)
    onMount?.(controller)
  }
</script>

<div use:init="{settings}" class="ui sticky">
  <slot />
</div>
