<script>
  import '../../../semantic/dist/components/site.css'
  import '../../../semantic/dist/components/reset.css'
  import '../../../semantic/dist/components/header.css'
  import { classNames, css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let disabled = false
  export let primary = false
  export let secondary = false
  export let inverted = false
  export let icon = false
  export let sub = false
  export let divider = false
  export let dividing = false
  export let attached
  export let aligned
  export let floated
  export let size
  export let color
  export let block = false
  export let justified = false
  export let style = {}
</script>

<h2
  use:css="{style}"
  class="{classNames(
    _class,
    'ui',
    size,
    color,
    {
      primary,
      secondary,
      sub,
      icon,
      disabled,
      block,
      inverted,
      dividing,
      attached,
      floated,
      aligned,
      justified,
      divider
    },
    'header'
  )}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</h2>
