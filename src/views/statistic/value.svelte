<script>
  import { classNames, css } from '../../utils'

  let _class
  export { _class as class }
  export let style
  export let text = false
</script>

<div use:css="{style}" class="{classNames(_class, { text }, 'value')}">
  <slot />
</div>
