<script>
  import '../../../fomantic/dist/components/checkbox.css'
  import { classNames, css } from '../../utils'

  let _class = ''
  export { _class as class }
  export let style = {}
  export let id
  export let type = ''
  export let state = ''
  export let fitted = false
  export let inverted = false
</script>

<div
  use:css="{style}"
  class="{classNames(
    'ui',
    type,
    state,
    [fitted, 'fitted'],
    [inverted, 'inverted'],
    'checkbox',
    _class
  )}"
>
  <input type="checkbox" name="example" />
  <slot>
    <label></label>
  </slot>
</div>
