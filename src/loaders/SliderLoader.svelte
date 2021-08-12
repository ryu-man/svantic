<script>
  const promise = import('../../semantic/dist/components/slider.min')
</script>

{#if jQuery.slider}
  <slot />
{:else}
  {#await promise then _}
    <slot />
  {/await}
{/if}
