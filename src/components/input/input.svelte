<script lang="ts">
  import { classNames } from '../../utils'
  import { css } from '../../utils/css'
  import { register } from '../../utils/events'

  let _class = ''
  let size: string = ''
  let state: string = ''
  let color: string = ''
  let icon: string = ''
  let action: string = ''
  let labeled: string = ''
  let fluid: boolean = false
  let corner: boolean = false
  let inverted: boolean = false
  let transparent: boolean = false
  let on: {} = {}
  let style: {} = {}
  export {
    _class as class,
    size,
    state,
    color,
    icon,
    action,
    labeled,
    fluid,
    corner,
    inverted,
    transparent,
    style,
    on
  }

  function init(node: HTMLElement, _params?: {}) {
    const unregister = register(node, on)
    return {
      destroy() {
        unregister()
      }
    }
  }
</script>

<div
  use:init
  use:css="{style}"
  class="{`${classNames([
    _class,
    color,
    size,
    state,
    labeled && `${labeled} labeled`,
    icon && `${icon} icon`,
    action && `${action} action`
  ])} ui input`}"
  class:fluid
  class:corner
  class:inverted
  class:transparent
>
  <slot>
    <!-- optional fallback -->
    <input type="text"/>
  </slot>
  <slot name="label">
    <!-- optional fallback -->
  </slot>
</div>

<style global>
  @import '../../../fomantic/dist/components/input.css';
</style>
