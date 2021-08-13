<script context="module">
  const load = () => import('../../../semantic/dist/components/sidebar.min')
</script>

{#if jQuery?.fn?.sidebar}
  <slot />
{:else}
  {#await load() then _}
    <slot />
  {/await}
{/if}
