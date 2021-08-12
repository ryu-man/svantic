<script>
  const promise = import('../../semantic/dist/components/embed.min')
</script>

{#if jQuery.embed}
  <slot />
{:else}
  {#await promise then _}
    <slot />
  {/await}
{/if}
