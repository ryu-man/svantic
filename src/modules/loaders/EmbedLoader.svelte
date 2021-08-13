<script context="module">
  const load = () => import('../../../semantic/dist/components/embed.min')
</script>

{#if jQuery?.fn?.embed}
  <slot />
{:else}
  {#await load() then _}
    <slot />
  {/await}
{/if}
