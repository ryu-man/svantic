<script>
  import '../../../semantic/dist/components/site.css'
  import '../../../semantic/dist/components/reset.css'
  import '../../../semantic/dist/components/transition.css'
  import '../../../semantic/dist/components/loader.css'
  import { classNames, css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let text = false
  export let intermediat = false
  export let active = false
  export let disabled = false
  export let speed = ''
  export let animationStyle = ''
  export let inline = false
  export let center = false
  export let inverted = false
  export let icon = false
  export let style = {}
</script>

<div
  use:css="{style}"
  class="{classNames(
    _class,
    'ui',
    animationStyle,
    speed,
    { inline, center, icon, inverted, active, intermediat, disabled },
    text,
    'loader'
  )}"
>
  <slot />
</div>
