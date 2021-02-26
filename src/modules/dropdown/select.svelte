<script>
  import '../../../semantic/dist/components/site.css'
  import '../../../semantic/dist/components/reset.css'
  import '../../../semantic/dist/components/transition.css'
  import { css, classNames } from '../../utils'
  import Controller from './controller'
  
  let _class = ''
  export { _class as class }
  export let style = {}
  export let size = ''
  export let wide = ''
  export let active = false
  export let disabled = false
  export let loading
  export let error = false
  export let speed = ''
  export let height = ''
  export let column
  export let menuDirection = ''
  export let link = false
  export let item = false
  export let long = false
  export let fluid = false
  export let label = false
  export let compact = false
  export let inverted = false
  export let scrolling = false
  export let selection = false
  export let search = false
  export let clearable = false
  export let multiple = false
  export let floating = false
  export let labeled = false
  export let icon = false
  export let button = false
  export let inline = false
  export let pointing = false
  export let simple = false
  export let settings = {}
  export let onMount

  function module(node, settings) {
    css(node, style)

    let controller = new Controller(node, settings)
    onMount?.(controller)

    return {
      destroy() {
        controller.destroy()
        controller = null
      }
    }
  }
</script>

<select
  use:module="{settings}"
  multiple="{multiple}"
  class="{classNames(
    _class,
    'ui',
    height,
    column,
    speed,
    wide,
    size,
    menuDirection,
    {
      link,
      item,
      long,
      fluid,
      label,
      compact,
      scrolling,
      inverted,
      active,
      disabled,
      loading,
      error,
      selection,
      search,
      clearable,
      multiple,
      floating,
      labeled,
      icon,
      button,
      inline,
      pointing,
      simple
    },
    'dropdown'
  )}"
>
  <slot />
</select>
