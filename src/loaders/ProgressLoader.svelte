<script>
  const promise = import('../../semantic/dist/components/progress.min')
</script>

{#if jQuery.progress}
  <slot />
{:else}
  {#await promise then _}
    <slot />
  {/await}
{/if}
