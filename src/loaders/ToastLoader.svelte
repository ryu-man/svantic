<script>
  const promise = import('../../semantic/dist/components/toast.min')
</script>

{#if jQuery.toast}
  <slot />
{:else}
  {#await promise then _}
    <slot />
  {/await}
{/if}
