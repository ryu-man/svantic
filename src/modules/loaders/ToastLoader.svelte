<script context="module">
  const load = () => import('../../../semantic/dist/components/toast.min')
</script>

{#if jQuery?.fn?.toast}
  <slot />
{:else}
  {#await load() then _}
    <slot />
  {/await}
{/if}
