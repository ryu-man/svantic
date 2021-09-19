<script context="module">
  // @ts-ignore
  const load = () => import('../../../semantic/dist/components/popup.min')
</script>

<script>
  import TransitionLoader from './TransitionLoader.svelte'
</script>

{#if jQuery?.fn?.popup}
  <slot />
{:else}
  <TransitionLoader>
    {#await load() then _}
      <slot />
    {/await}
  </TransitionLoader>
{/if}
