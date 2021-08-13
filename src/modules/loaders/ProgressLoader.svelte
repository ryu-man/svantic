<script context="module">
  const load = () => import('../../../semantic/dist/components/progress.min')
</script>

{#if jQuery?.fn?.progress}
  <slot />
{:else}
  {#await load() then _}
    <slot />
  {/await}
{/if}
