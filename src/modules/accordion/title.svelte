<script>
  import { classNames, css } from '../../utils'

  let _class
  export { _class as class }
  export let style
  export let active = false
</script>

<div use:css="{style}" class="{classNames(_class, { active }, 'title')}">
  <slot />
</div>
