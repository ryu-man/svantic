<script>
  import '../../semantic/dist/components/site.min.css'
  import '../../semantic/dist/components/reset.min.css'
  import '../../semantic/dist/components/message.min.css'
  import { classNames, css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let message = false
  export let list = false
  export let icon = false
  export let dissmissible = false
  export let info = false
  export let warning = false
  export let positive = false
  export let negative = false
  export let visible = false
  export let hidden = false
  export let attached
  export let floating
  export let size
  export let compact = false
  export let style = {}
</script>

<div
  use:css="{style}"
  class="{classNames(
    _class,
    'ui',
    size,
    {
      message,
      list,
      icon,
      dissmissible,
      info,
      warning,
      positive,
      negative,
      visible,
      hidden,
      compact,
      floating,
      attached
    },
    'message'
  )}"
>
  <slot />
</div>
