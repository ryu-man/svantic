<script>  
    const promise = import('../../semantic/dist/components/popup.min')
  </script>
  
  {#if jQuery.popup}
  <slot />
{:else}
  {#await promise then _}
    <slot />
  {/await}
{/if}