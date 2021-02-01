<script>
  import '../../../semantic/dist/components/loader.css'
  import { classNames, css } from '../../utils'

  let _class = ''
  export let type = ''
  export let state = ''
  export let speed = ''
  export let animationStyle = ''
  export let inline = false
  export let center = false
  export let inverted = false
  export let icon = false
  export let style = {}
  export { _class as class }
</script>

<div
  use:css="{style}"
  class:inline
  class:center
  class:inverted
  class:icon
  class="{classNames(type, state, animationStyle, speed, 'ui loader', _class)}"
>
  <slot />
</div>
