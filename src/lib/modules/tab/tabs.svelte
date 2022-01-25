<script context="module">
  export const key = Symbol()
</script>

<script>
  import '../../../../semantic/dist/components/site.min.css'
  import '../../../../semantic/dist/components/reset.min.css'
  import '../../../../semantic/dist/components/transition.min.css'
  import '../../../../semantic/dist/components/tab.min.css'
  
  import { createEventDispatcher, onMount as onMounted } from 'svelte'
  import { classNames, css } from '../../utils'
  import { writable } from 'svelte/store'
  import { setContext, tick } from 'svelte'
  import { tab } from '../utils'
  import Item from './item.svelte'
  
  let _class
  export { _class as class }
  export let attached = ''
  export let loading = false
  export let segment = false
  export let active = false
  export let style
  export let onMount

  export let settings = {}

  const executor = tab(settings)
  const dispatch = createEventDispatcher();

  const tabs = writable([])
  const items = writable([])

  setContext(key, tabs)

  $: $items.length && ($executor = $items)

  onMounted(()=>{
    onMount($executor)
    dispatch('mount', $executor)
  })

  export function attachEvents(selector, event) {
    return executor.module('attach events', selector, event)
  }

  export function changeTab(path) {
    return executor.module('change tab', path)
  }

  export function setState(path) {
    return executor.module('set path', path)
  }

  export async function getPath() {
    return await executor.module('get path')
  }

  export async function isTab() {
    return await executor.module('is tab')
  }

  export function cacheRead(path) {
    return executor.module('cache read', path)
  }

  export function cacheAdd(path, html) {
    return executor.module('cache add', path, html)
  }

  export function cacheRemove(path) {
    return executor.module('cache remove', path)
  }

  export function ready() {
    return executer.ready
  }
</script>

  <div
    use:css="{style}"
    class="{classNames(
      _class,
      'ui',
      { loading, segment, active, attached },
      'tabular menu'
    )}"
  >
    {#each $tabs as { center, data, title, active }, i}
      <Item
        bind:node="{$items[i]}"
        data="{data}"
        center="{center}"
        active="{active}"
      >
        {title}
      </Item>
    {/each}
  </div>
  <slot />
