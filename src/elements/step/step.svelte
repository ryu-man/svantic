<script>
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

  $: classnames = classNames(
    _class,
    'ui',
    { completed, active, disabled, ordered, link },
    'step'
  )
</script>

{#if href || as === 'a'}
  <a use:css="{style}" href="{href}" class="{classnames}">
    {#if typeof icon === 'string'}
      <Icon name="{icon}" />
    {/if}
    <slot>
      <!-- optional fallback -->
    </slot>
  </a>
{:else}
  <div use:css="{style}" class="{classnames}">
    {#if typeof icon === 'string'}
      <Icon name="{icon}" />
    {/if}
    <slot>
      <!-- optional fallback -->
    </slot>
  </div>
{/if}
