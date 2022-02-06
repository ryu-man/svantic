<script>
  import '../../semantic/dist/components/transition.min.css'
  import '../../semantic/dist/components/step.min.css'

  import { createEventDispatcher } from 'svelte'
  import { classNames, css } from '../../utils'
  import Icon from '../icon/icon.svelte'

  let _class = ''
  export { _class as class }
  export let style = {}

  export let completed = false
  export let active = false
  export let disabled = false
  export let link = false
  export let href
  export let as = 'div'
  export let icon
  export let ordered

  $: classnames = classNames(
    _class,
    'ui',
    { completed, active, disabled, ordered, link },
    'step'
  )

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }
</script>

{#if href || as === 'a'}
  <a use:css="{style}" use:init href="{href}" class="{classnames}">
    {#if typeof icon === 'string'}
      <Icon name="{icon}" />
    {/if}
    <slot />
  </a>
{:else}
  <div use:css="{style}" use:init class="{classnames}">
    {#if typeof icon === 'string'}
      <Icon name="{icon}" />
    {/if}
    <slot />
  </div>
{/if}
