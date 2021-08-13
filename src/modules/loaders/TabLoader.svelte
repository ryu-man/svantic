<script context="module">
  const load = () => import('../../../semantic/dist/components/tab.min')
</script>

{#if jQuery?.fn?.tab}
  <slot />
{:else}
  {#await load() then _}
    <slot />
  {/await}
{/if}
