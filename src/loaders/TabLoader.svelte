<script>
  const promise = import('../../semantic/dist/components/tab.min')
</script>

{#if jQuery.tab}
  <slot />
{:else}
  {#await promise then _}
    <slot />
  {/await}
{/if}
