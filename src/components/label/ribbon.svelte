<script>
  import '../../../fomantic/dist/components/label.css'
  
  import { css, register } from '../../utils'

  let _class = ''
  export let icon = false
  export let left = false
  export let right = false
  export let style = {}
  export { _class as class }

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

{#if icon}
  <div use:init class:icon class:left class:right class="ui black ribbon label">
    <slot />
  </div>
{:else}
  <!-- svelte-ignore a11y-missing-attribute -->
  <a use:init class:left class:right class="ui ribbon label {_class}">
    <slot>
      <!-- optional fallback -->
    </slot>
  </a>
  <!-- else content here -->
{/if}

