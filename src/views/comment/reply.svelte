<script>
  import { classNames, css } from '../../utils'

  let _class
  export { _class as class }
  export let style
</script>

<form use:css={style} class="{classNames(_class, 'ui reply form')}">
  <slot />
</form>
