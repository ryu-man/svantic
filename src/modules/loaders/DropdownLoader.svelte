<script context="module">
  const load = () => import('../../../semantic/dist/components/dropdown.min')
</script>

<script>
  import TransitionLoader from './TransitionLoader.svelte'
</script>

{#if jQuery?.fn?.dropdown}
  <slot />
{:else}
  <TransitionLoader>
    {#await load() then _}
      <slot />
    {/await}
  </TransitionLoader>
{/if}
