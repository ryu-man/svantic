<script lang="ts">
  import { register } from '../../utils/events.js'
  import { css } from '../../utils/css'


  let _class: string = ''
  export let style = {}
  //content
  //page
  export let type: string = ''
  // active
  // disabled
  export let state: string = ''
  // top
  // bottom
  // center
  export let aligned: string = ''
  // medium
  // light
  // very light
  export let shades: string = ''
  // bottom
  // center
  // top
  export let partial: string = ''
  export let inverted: boolean = false
  export let on = {}
  export { _class as class }

  export let onmount = (controller) => {}

  function init(node: HTMLElement, params?: {}) {
    css(node, style)
    /* const unregister = register(node, on)
    let controller = new Controller(node)
    onmount(controller)
    return {
      update() {},
      destroy() {
        unregister()
        controller = null
      }
    } */
  }
</script>

<div
  use:init
  class="{_class} {shades} {partial} {aligned} {state} {type} ui dimmer"
  class:aligned="{aligned != ''}"
  class:inverted
>
  {#if type == 'content'}
    <div
      class="content"
      style="{Object.entries(style)
        .map((e) => `${e[0]}:${e[1]}`)
        .join(';')}"
    >
      <slot>
        <!-- optional fallback -->
      </slot>
    </div>
  
    <slot>
      <!-- optional fallback -->
    </slot>
  {/if}
</div>

<style>
  /* @import './dimmer.css';*/
</style>
