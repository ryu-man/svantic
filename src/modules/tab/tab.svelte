<script>
  import { key } from './tabs.svelte'
  import { css, classNames } from '../../utils'
  import { createEventDispatcher, getContext } from 'svelte'

  let _class
  export { _class as class }
  export let attached
  export let active = false
  export let segment = false
  export let data
  export let center = false
  export let title
  export let style

  const tabs = getContext(key)

  const index = $tabs.length

  $: $tabs[index] = { attached, active, segment, data, center, title }

  const dispatch = createEventDispatcher()

  function init(node) {
      dispatch('mount', node)
  }
</script>

<div
  use:css="{style}"
  use:init
  data-tab="{data}"
  class="{classNames(_class, 'ui', { active, segment, attached }, 'tab')}"
>
  <slot />
</div>
