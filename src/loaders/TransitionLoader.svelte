<script>
  const promise = import('../../semantic/dist/components/transition.min')
</script>

{#if jQuery?.fn?.transition}
  <slot />
{:else}
  {#await promise then _}
    <slot />
  {/await}
{/if}
