<script context="module">
  const load = () => import('../../../semantic/dist/components/toast.min')
</script>

<script>
  import TransitionLoader from './TransitionLoader.svelte'
</script>

{#if jQuery?.fn?.toast}
  <slot />
{:else}
  <TransitionLoader>
    {#await load() then _}
      <slot />
    {/await}
  </TransitionLoader>
{/if}
