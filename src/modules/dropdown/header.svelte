<script>
  import {Icon} from '../../elements/icon'
  import { css, classNames } from '../../utils'

  let _class
  export { _class as class }
  export let style
  export let icon
</script>

<div use:css="{style}" class="{classNames(_class, 'header')}">
  {#if typeof icon === 'string'}
    <Icon name="{icon}" />
  {/if}
  <slot />
</div>
