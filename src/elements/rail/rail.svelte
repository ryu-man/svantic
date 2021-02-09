<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/rail.css'
  import { css, register, classNames } from '../../utils'

  let _class = ''
  export { _class as class }
  export let side
  export let internal
  export let dividing
  export let attached
  export let close
  export let size
  export let style = {}
</script>

<div
  use:css="{style}"
  class="{classNames(
    _class,
    'ui',
    side,
    size,
    { dividing, attached, internal, dividing, attached, close },
    'rail'
  )}"
>
  <slot>
    <!-- optional fallback -->
  </slot>
</div>
