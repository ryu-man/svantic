<script context="module">
  const load = () => import('../../../semantic/dist/components/sticky.min')
</script>

{#if jQuery?.fn?.sticky}
  <slot />
{:else}
  {#await load() then _}
    <slot />
  {/await}
{/if}
