<script>
  const promise = import('../../semantic/dist/components/sticky.min')
</script>

{#if jQuery.sticky}
  <slot />
{:else}
  {#await promise then _}
    <slot />
  {/await}
{/if}
