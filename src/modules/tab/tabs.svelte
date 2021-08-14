<script context="module">
  export const key = {}
</script>

<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/tab.min.css'

  import { classNames, css } from '../../utils'
  import { JQueryLazyLoader, TabLoader } from '../loaders'
  import { writable } from 'svelte/store'
  import { setContext, tick } from 'svelte'
  import Item from './item.svelte'

  export let _class
  export { _class as class }
  export let attached = ''
  export let loading = false
  export let segment = false
  export let active = false
  export let style

  /**
   * @type {SemanticUI.DropdownSettings.Param}
   */
  export let settings = {}

  const tabs = writable([])
  setContext(key, tabs)

  /**
   * @type {SemanticUI.Dropdown}
   */
  let exec

  /**
   *
   * @param node {HTMLDivElement}
   * @param settings
   */
  function module(node, settings) {
    css(node, style)
    exec = (...args) => jQuery(node.getElementsByClassName('item')).tab(...args)

    tabs.subscribe((v) => {
      tick().then(()=>{
        exec(settings)
      })
    })
  }

  export function attachEvents(selector, event) {
    return exec('attach events', selector, event)
  }

  export function changeTab(path) {
    return exec('change tab', path)
  }

  export function setState(path) {
    return exec('set path', path)
  }

  export async function getPath() {
    return await exec('get path')
  }

  export async function isTab() {
    return await exec('is tab')
  }

  export function cacheRead(path) {
    return exec('cache read', path)
  }

  export function cacheAdd(path, html) {
    return exec('cache add', path, html)
  }

  export function cacheRemove(path) {
    return exec('cache remove', path)
  }
</script>

<JQueryLazyLoader>
  <TabLoader>
    <div
      use:module="{settings}"
      class="{classNames(
        _class,
        'ui',
        { loading, segment, active, attached },
        'tabular menu'
      )}"
    >
      {#each $tabs as { center, data, title, active }}
        <!-- <div class:center class:active class="item" data-tab="{data}">
          {title}
        </div> -->
        <Item
          data="{data}"
          center="{center}"
          active="{active}"
          settings="{settings}"
        >
          {title}
        </Item>
      {/each}
    </div>
    <slot />
  </TabLoader>
</JQueryLazyLoader>
