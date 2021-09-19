<script>
  import { classNames, css } from '../../utils'

  let _class
  export { _class as class }
  export let color = ''
  export let inverted = false
  export let progress = false
  export let style
</script>

<div
  use:css="{style}"
  class="{classNames(_class, color, { inverted }, 'bar')}"
  on:click
>
  {#if progress}
    <div class="progress"></div>
  {/if}
</div>
