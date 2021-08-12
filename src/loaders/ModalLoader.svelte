<script>
  import DimmerLoader from './DimmerLoader.svelte'
  import TransitionLoader from './TransitionLoader.svelte'
  const promise = import('../../semantic/dist/components/modal.min')
</script>

{#if jQuery?.fn?.modal}
  <slot />
{:else}
  {#await promise then _}
    <TransitionLoader>
      <DimmerLoader>
        <slot />
      </DimmerLoader>
    </TransitionLoader>
  {/await}
{/if}
