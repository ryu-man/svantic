<script context="module">
  const load = () => import('../../../semantic/dist/components/slider.min')
</script>

{#if jQuery?.fn?.slider}
  <slot />
{:else}
  {#await load() then _}
    <slot />
  {/await}
{/if}
