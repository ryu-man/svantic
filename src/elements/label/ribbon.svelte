<script>
  import { classNames, css, register } from '../../utils'

  let _class = ''
  export { _class as class }
  export let icon
  export let color
  export let right = false
  export let style = {}

  function init(node) {
    const unregister = register(node, on)

    return {
      destroy() {
        unregister()
      }
    }
  }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a use:css={style} use:init class={classNames(_class,'ui',color, {icon, right},'ribbon','label')}>
  <slot />
</a>

