<script>
  import { key } from './tabs.svelte'
  import { css, classNames } from '../../utils'
  import { getContext } from 'svelte'
  import { tab } from '../module'

  export let _class
  export { _class as class }
  export let attached
  export let active = false
  export let segment = false
  export let data
  export let center = false
  export let title
  export let style

  const tabs = getContext(key)

  const index = $tabs.length

  const executer = tab()

  $: $tabs[index] = { attached, active, segment, data, center, title, executer }

  export function attachEvents(selector, event) {
    return executer.module('attach events', selector, event)
  }

  export function changeTab(path) {
    return executer.module('change tab', path)
  }

  export function setState(path) {
    return executer.module('set path', path)
  }

  export async function getPath() {
    return await executer.module('get path')
  }

  export async function isTab() {
    return await executer.module('is tab')
  }

  export function cacheRead(path) {
    return executer.module('cache read', path)
  }

  export function cacheAdd(path, html) {
    return executer.module('cache add', path, html)
  }

  export function cacheRemove(path) {
    return executer.module('cache remove', path)
  }
</script>

<div
  use:css="{style}"
  data-tab="{data}"
  class="{classNames(_class, 'ui', { active, segment, attached }, 'tab')}"
>
  <slot />
</div>
