<script context="module">
  const load = () => import('../../../semantic/dist/components/dimmer.min')
</script>

{#if jQuery?.fn?.dimmer}
  <slot />
{:else}
  {#await load() then _}
    <slot />
  {/await}
{/if}
