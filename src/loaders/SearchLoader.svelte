<script>
  const promise = import('../../semantic/dist/components/search.min')
</script>

{#if jQuery.search}
  <slot />
{:else}
  {#await promise then _}
    <slot />
  {/await}
{/if}
