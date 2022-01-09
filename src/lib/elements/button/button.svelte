<script>
  import '../../../../semantic/dist/components/site.min.css'
  import '../../../../semantic/dist/components/reset.min.css'
  import '../../../../semantic/dist/components/transition.min.css'
  import '../../../../semantic/dist/components/button.min.css'

  import { classNames, css } from '../../utils'
  import Icon from '../icon'
  import { createEventDispatcher } from 'svelte'

  let _class = ''
  export { _class as class }
  export let size = ''
  export let color = ''
  export let state = ''
  export let social = ''
  export let floated = ''
  export let labeled = ''
  export let attached = ''
  export let icon = false
  export let fluid = false
  export let toggle = false
  export let compact = false
  export let circular = false
  export let basic = false
  export let positive = false
  export let negative = false
  export let inverted = false
  export let primary = false
  export let secondary = false
  export let tertiary = false
  export let animated
  export let disabled = false
  export let active = false
  export let loading
  export let tabIndex
  export let as = 'div'
  export let type
  export let style = {}

  $: emphasis = primary
    ? 'primary'
    : secondary
    ? 'secondary'
    : tertiary
    ? 'tertiary'
    : ''

  const dispatch = createEventDispatcher()

  /**
   *
   * @param {HTMLElement} node
   */
  function init(node) {
    dispatch('mount', node)

    if (tabIndex !== undefined && tabIndex !== null) {
      node.tabIndex = tabIndex
    }
  }

  $: classProp = classNames(
    _class,
    'ui',
    {
      icon,
      fluid,
      toggle,
      compact,
      circular,
      positive,
      negative,
      basic,
      inverted,
      disabled,
      active,
      floated,
      attached,
      animated,
      loading,
      labeled
    },
    size,
    state,
    social,
    color,
    emphasis,
    'button'
  )
</script>

{#if as === 'button' || type}
  <button use:css="{style}" use:init on:click class="{classProp}" type="{type}">
    {#if typeof icon === 'string'}
      <Icon name="{icon}" />
    {/if}
    <slot />
  </button>
{:else}
  <div use:css="{style}" use:init on:click class="{classProp}">
    {#if typeof icon === 'string'}
      <Icon name="{icon}" />
    {/if}
    <slot />
  </div>
{/if}
