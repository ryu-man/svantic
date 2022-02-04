<script>
  import '../../semantic/dist/components/site.min.css'
  import '../../semantic/dist/components/reset.min.css'
  import '../../semantic/dist/components/input.min.css'
  import { createEventDispatcher } from 'svelte'
  import { classNames, css } from '../../utils'
  import Wrapper from './Wrapper.svelte'

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
  export let textarea = false

  const dispatch = createEventDispatcher()

  function init(node) {
    dispatch('mount', node)
  }

  function setType(node) {
    node.type = type
  }
</script>

<Wrapper
  class="{_class}"
  size="{size}"
  state="{state}"
  color="{color}"
  icon="{icon}"
  action="{action}"
  labeled="{labeled}"
  fluid="{fluid}"
  corner="{corner}"
  inverted="{inverted}"
  transparent="{transparent}"
  style="{style}"
>
  <slot name="left" />
  {#if !textarea}
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
  {:else}
    <textarea
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
      on:keyup></textarea>
  {/if}
  <slot />
  <slot name="right" />
</Wrapper>
