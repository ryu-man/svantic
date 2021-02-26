<script>
  import { classNames, css } from '../../utils'

  let _class
  export { _class as class }
  export let style
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a use:css="{style}" class="{classNames(_class, 'item')}">
  <slot />
</a>

<style>
  /* your styles go here */
</style>
