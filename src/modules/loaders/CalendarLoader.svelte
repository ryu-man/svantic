<script context="module">
  const load = () => import('../../../semantic/dist/components/calendar.min')
</script>
<script>
  import DropdownLoader from './DropdownLoader.svelte'
  import PopupLoader from './PopupLoader.svelte'
  import TransitionLoader from './TransitionLoader.svelte'
</script>

<TransitionLoader>
  <DropdownLoader>
    <PopupLoader>
      {#if jQuery?.fn?.calendar}
        <slot />
      {:else}
        {#await load() then _}
          <slot />
        {/await}
      {/if}
    </PopupLoader>
  </DropdownLoader>
</TransitionLoader>
