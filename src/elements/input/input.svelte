<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/input.min.css'
  import { classNames, css } from '../../utils'
  import { createEventDispatcher } from 'svelte'

  let _class = ''
  export { _class as class }
  export let size = ''
  export let state = ''
  export let color = ''
  export let icon = ''
  export let action = ''
  export let labeled = ''
  export let fluid = false
  export let corner = false
  export let inverted = false
  export let transparent = false
  export let style = {}
  export let type = 'text'
  export let placeholder = ''
  export let minLength
  export let maxLength
  export let min
  export let max
  export let pattern
  export let value

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }

  function setType(node) {
    node.type = type
  }
</script>

<div
  use:css="{style}"
  use:init
  class="{classNames(
    _class,
    'ui',
    color,
    size,
    state,
    { fluid, corner, inverted, transparent, labeled, icon, action },
    'input'
  )}"
>
  <slot />
  <input
    use:setType
    placeholder="{placeholder}"
    min="{min}"
    max="{max}"
    minlength="{minLength}"
    maxlength="{maxLength}"
    pattern="{pattern}"
    bind:value
    on:focus
    on:focusin
    on:focusout
    on:blur
    on:input
    on:change
    on:keydown
    on:keypress
    on:keyup
  />
  <slot name="after" />
</div>
