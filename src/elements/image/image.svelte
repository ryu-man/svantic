<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/image.min.css'
  import { css, register, classNames } from '../../utils'

  export let src = ''
  export let alt = ''
  export let size = ''
  export let state = ''
  export let aligned = ''
  export let floated = ''
  export let round = false
  export let space = false
  export let fluid = false
  export let avatar = false
  export let middle = false
  export let circular = false
  export let centered = false
  export let bordered = false
  export let style = {}
  let _class = ''
  export { _class as class }
</script>

<img
  use:css="{style}"
  class:space
  class="{classNames(
    _class,
    'ui',
    state,
    size,
    {
      avatar,
      bordered,
      fluid,
      round,
      circular,
      middle,
      centered,
      space,
      floated,
      aligned
    },
    'image'
  )}"
  src="{src}"
  alt="{alt}"
/>
<slot />
