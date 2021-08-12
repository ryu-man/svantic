<script>
  import RegisterJQuery from './RegisterJQuery.svelte'

  const promise = import('jquery')
</script>

{#if !window['$'] || !window['jQuery']}
  {#await promise then jq}
    <RegisterJQuery jquery="{jq.default}">
      <slot />
    </RegisterJQuery>
  {/await}
{:else}
  <slot />
{/if}
