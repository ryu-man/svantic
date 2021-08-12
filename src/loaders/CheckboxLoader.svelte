<script>
  const promise = import('../../semantic/dist/components/checkbox.min')
</script>

{#if jQuery.checkbox}
  <slot />
{:else}
  {#await promise then _}
    <slot />
  {/await}
{/if}
