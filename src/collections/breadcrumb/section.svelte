<script>
  import { createEventDispatcher } from 'svelte'
  import { classNames, css } from '../../utils'

  let _class
  export let style
  export { _class as class }
  export let active = false
  export let as = 'a'

  const dispatch = createEventDispatcher()
  function init(node) {
    dispatch('mount', node)
  }

  $: className = classNames(_class, { active }, 'section')
</script>

{#if as === 'a'}
  <!-- svelte-ignore a11y-missing-attribute -->
  <a use:css="{style}" use:init class="{className}" on:click|preventDefault>
    <slot />
  </a>
{:else}
  <div use:css="{style}" use:init class="{className}" on:click|preventDefault>
    <slot />
  </div>
{/if}
