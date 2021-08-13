<script context="module">
  const load = () => import('../../../semantic/dist/components/search.min')
</script>

{#if jQuery?.fn?.search}
  <slot />
{:else}
  {#await load() then _}
    <slot />
  {/await}
{/if}
