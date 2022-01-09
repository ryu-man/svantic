<script>
  import { Icon } from '../../elements'
  import { classNames, css, register } from '../../utils'

  export let active = false
  export let horizontally = false
  export let fitted = false
  export let icon = false
  export let href
  export let content
  export let style = {}
  export let on = {}
  let _class = ''
  export { _class as class }

  function init(node) {
    css(node, style)
    const unregister = register(node, on)
    // href && (node.href = href)
    return {
      destroy() {
        unregister()
      }
    }
  }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a
  use:init
  class="{classNames(_class, { active, horizontally, fitted, icon }, 'item')}"
  href="{href}"
  data-content="{content}"
  on:click
>
  <slot />
  {#if typeof icon === 'string'}
    <Icon name="{icon}" />
  {/if}
</a>
