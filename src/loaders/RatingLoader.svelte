<script>
  const promise = import('../../semantic/dist/components/rating.min')
</script>

{#if jQuery.rating}
  <slot />
{:else}
  {#await promise then _}
    <slot />
  {/await}
{/if}
