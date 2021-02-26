<script>
  import { classNames, css } from '../../utils'

  let _class
  export { _class as class }
  export let style
  export let align
</script>

<div use:css="{style}" class="{classNames(_class, { align }, 'content')}">
  <slot />
</div>
