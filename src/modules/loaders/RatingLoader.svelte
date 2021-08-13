<script context="module">
  const load = () => import('../../../semantic/dist/components/rating.min')
</script>

{#if jQuery?.fn?.rating}
  <slot />
{:else}
  {#await load() then _}
    <slot />
  {/await}
{/if}
