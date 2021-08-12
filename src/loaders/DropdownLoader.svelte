<script>
  import TransitionLoader from './TransitionLoader.svelte'
  const promise = import('../../semantic/dist/components/dropdown.min')
</script>

{#if jQuery?.fn?.dropdown}
  <slot />
{:else}
  <TransitionLoader>
    {#await promise then _}
      <slot />
    {/await}
  </TransitionLoader>
{/if}
