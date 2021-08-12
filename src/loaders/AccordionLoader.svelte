<script>
  const promise = import('../../semantic/dist/components/accordion.min')
</script>

{#if jQuery.accordion}
  <slot />
{:else}
  {#await promise then _}
    <slot />
  {/await}
{/if}
