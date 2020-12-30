<script>
  import { css, classNames } from '../../utils'
  import Controller from './controller'

  let _class = ''
  export let size = ''
  export let wide = ''
  export let type = ''
  export let state = ''
  export let speed = ''
  export let height = ''
  export let column = ''
  export let loaderStyle = ''
  export let menuDirection = ''
  export let top = false
  export let link = false
  export let item = false
  export let left = false
  export let long = false
  export let fluid = false
  export let right = false
  export let label = false
  export let bottom = false
  export let compact = false
  export let inverted = false
  export let scrolling = false
  export let select = false
  export let element = 'div'
  export let style = {}
  // export let on = {}
  export { _class as class }
  export let onMount

  $: _type = type instanceof Array ? type.join(' ') : type

  function init(node) {
    css(node, style)
    node.classList.add('ui', 'dropdown')
    let controller = new Controller(node)
    onMount?.(controller)
  }
</script>

{#if select}
  <select
    use:init
    multiple="{type.includes('multiple')}"
    class:top
    class:link
    class:item
    class:left
    class:long
    class:right
    class:fluid
    class:label
    class:bottom
    class:compact
    class:inverted
    class:scrolling
    class="{classNames(
      height,
      column,
      speed,
      loaderStyle,
      wide,
      _type,
      state,
      size,
      menuDirection,
      'ui dropdown',
      _class
    )}"
  >
    <slot>
      <!-- optional fallback -->
    </slot>
  </select>
{:else}
  <div
    use:init
    class:top
    class:link
    class:item
    class:left
    class:long
    class:right
    class:fluid
    class:label
    class:bottom
    class:compact
    class:inverted
    class:scrolling
    class="{classNames(
      height,
      column,
      speed,
      loaderStyle,
      wide,
      _type,
      state,
      size,
      menuDirection,
      'ui dropdown',
      _class
    )}"
  >
    <slot>
      <!-- optional fallback -->
    </slot>
  </div>
{/if}

<style global>
  @import '../../../fomantic/dist/components/dropdown.css';
</style>
