<script>
  const promise = import('../../semantic/dist/components/dimmer.min')
</script>

{#if jQuery.dimmer}
  <slot />
{:else}
  {#await promise then _}
    <slot />
  {/await}
{/if}
