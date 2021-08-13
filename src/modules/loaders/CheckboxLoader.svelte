<script context="module">
  const load = () => import('../../../semantic/dist/components/checkbox.min')
</script>

{#if jQuery?.fn?.checkbox}
  <slot />
{:else}
  {#await load() then _}
    <slot />
  {/await}
{/if}
