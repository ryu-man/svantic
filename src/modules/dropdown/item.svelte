<script>
  import { css, classNames } from '../../utils'
  let _class
  export { _class as class }
  export let style
  export let value
  export let text
  export let disabled = false
  export let image = false
  export let label = false
  export let selected = false
  export let active = false
</script>

<div
  use:css="{style}"
  class="{classNames(_class, { disabled, image, label, selected, active }, 'item')}"
  data-value="{value}"
  data-text="{text}"
  on:click
>
  <slot />
</div>
