<script context="module">
  const load = () => import('jquery')
</script>

<script>
  import RegisterJQuery from './RegisterJQuery.svelte'
</script>

{#if !window['jQuery']}
  {#await load() then jq}
    <RegisterJQuery jquery="{jq.default}">
      <slot />
    </RegisterJQuery>
  {/await}
{:else}
  <slot />
{/if}
