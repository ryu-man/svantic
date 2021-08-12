<script>
  const promise = import('../../semantic/dist/components/sidebar.min')
</script>

{#if jQuery.sidebar}
  <slot />
{:else}
  {#await promise then _}
    <slot />
  {/await}
{/if}
