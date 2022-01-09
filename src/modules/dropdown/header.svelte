<script>
  import { createEventDispatcher } from 'svelte';
  import Icon from '../../elements/icon'
  import { css, classNames } from '../../utils'

  let _class
  export { _class as class }
  export let style
  export let icon

  const dispatch = createEventDispatcher()

  function init(node) {
      dispatch('mount', node)
  }
</script>

<div use:css="{style}" use:init class="{classNames(_class, 'header')}">
  {#if typeof icon === 'string'}
    <Icon name="{icon}" />
  {/if}
  <slot />
</div>
