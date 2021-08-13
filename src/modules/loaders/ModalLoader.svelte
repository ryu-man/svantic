<script context="module">
  const load = () => import('../../../semantic/dist/components/modal.min')
</script>
<script>
  import DimmerLoader from './DimmerLoader.svelte'
  import TransitionLoader from './TransitionLoader.svelte'
</script>

{#if jQuery?.fn?.modal}
  <slot />
{:else}
  {#await load() then _}
    <TransitionLoader>
      <DimmerLoader>
        <slot />
      </DimmerLoader>
    </TransitionLoader>
  {/await}
{/if}
