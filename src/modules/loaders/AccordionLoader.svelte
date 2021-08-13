<script context="module">
  const load = () => import('../../../semantic/dist/components/accordion.min')
</script>

<script>
</script>

{#if jQuery?.fn?.accordion}
  <slot />
{:else}
  {#await load() then _}
    <slot />
  {/await}
{/if}
