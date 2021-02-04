<script>
  import '../../../semantic/dist/components/button.css'
  import { classNames, css, register } from '../../utils'
  import Icon from '../icon/icon.svelte'

  let _class = ''
  export { _class as class }
  export let size = ''
  export let type = ''
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
  export let loading
  export let tabIndex
  export let as = 'div'
  export let style = {}
  export let on = {}

  $: _type = type?.join?.(' ') ?? type
  $: emphasis = primary
    ? 'primary'
    : secondary
    ? 'secondary'
    : tertiary
    ? 'tertiary'
    : ''

  /**
   *
   * @param {HTMLElement} node
   */
  function init(node) {
    css(node, style)
    if (tabIndex !== undefined && tabIndex !== null) {
      node.tabIndex = tabIndex
    }
    const unregister = register(node, on)
    return {
      destroy() {
        unregister()
      }
    }
  }
</script>

{#if as === 'button'}
  <button
    use:init
    on:click
    class="{classNames(
      'ui',
      _class,
      [floated, 'floated'],
      [attached, 'attached'],
      [animated, 'animated'],
      [loading, 'loading'],
      [labeled, 'labeled'],
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
        disabled
      },
      size,
      state,
      social,
      color,
      emphasis,
      _type,
      'button'
    )}"
  >
    {#if typeof icon === 'string'}
      <Icon name="{icon}" />
    {/if}
    <slot />
  </button>
{:else}
  <div
    use:init
    on:click
    class="{classNames(
      'ui',
      _class,
      [floated, 'floated'],
      [attached, 'attached'],
      [animated, 'animated'],
      [loading, 'loading'],
      [labeled, 'labeled'],
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
        disabled
      },
      size,
      state,
      social,
      color,
      emphasis,
      _type,
      'button'
    )}"
  >
    {#if typeof icon === 'string'}
      <Icon name="{icon}" />
    {/if}
    <slot />
  </div>
{/if}
