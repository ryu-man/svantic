<script>
  import DropdownLoader from './DropdownLoader.svelte'
  import PopupLoader from './PopupLoader.svelte'
  import TransitionLoader from './TransitionLoader.svelte'

  const promise = import('../../semantic/dist/components/calendar.min')
</script>

<TransitionLoader>
  <DropdownLoader>
    <PopupLoader>
      {#if jQuery.calendar}
        <slot />
      {:else}
        {#await promise then _}
          <slot />
        {/await}
      {/if}
    </PopupLoader>
  </DropdownLoader>
</TransitionLoader>
