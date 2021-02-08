<script>
  import { classNames, css } from '../../utils'

  let _class = ''
  export let style = {}
  export { _class as class }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a use:css="{style}" class="{classNames(_class, 'item')}">
  <slot />
</a>
