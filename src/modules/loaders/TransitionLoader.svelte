<script context="module">
  const load = () => import('../../../semantic/dist/components/transition.min')
</script>

{#if jQuery?.fn?.transition}
  <slot />
{:else}
  {#await load() then _}
    <slot />
  {/await}
{/if}
