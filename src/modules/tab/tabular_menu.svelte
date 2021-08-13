<script context="module">
  export const key = {}
</script>

<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/tab.min.css'

  import { classNames, css } from '../../utils'
  import JQueryLazyLoader from '../../loaders/JQueryLazyLoader.svelte'
  import TabLoader from '../../loaders/TabLoader.svelte'
  import { writable } from 'svelte/store'
  import { setContext } from 'svelte'

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

  function module(node, settings) {
    css(node, style)

    /**
     * @type {JQueryStatic}
     */
    const jQuery = window['JQuery']

    exec = (...args) => jQuery(node).tab(...args)
    exec(settings)
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
      {#each $tabs as { center, data, title }}
        <div class:center class="item" data-tab="{data}">
          {title}
        </div>
      {/each}
    </div>
    <slot />
  </TabLoader>
</JQueryLazyLoader>
