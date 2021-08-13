<script context="module">
  const load = () => import('../../../semantic/dist/components/popup.min')
</script>

{#if jQuery?.fn?.popup}
  <slot />
{:else}
  {#await load() then _}
    <slot />
  {/await}
{/if}
