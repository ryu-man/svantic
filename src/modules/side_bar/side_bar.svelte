<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/sidebar.min.css'

  import { onMount as onMounted } from 'svelte'
  import { css, classNames } from '../../utils'
  import JQueryLazyLoader from '../loaders/JQueryLazyLoader.svelte'
  import SidebarLoader from '../loaders/SidebarLoader.svelte'
  import { sidebar } from '../module'

  let _class
  export { _class as class }
  export let wide = ''
  export let visible = false
  export let dimmed = false
  export let direction = ''
  export let inverted = false
  export let vertical = false
  export let style
  export let settings = {}
  export let onMount

  const executer = sidebar(settings)

  onMounted(() => {
    onMount?.($executer)
  })

  export function attachEvents(selector, event) {
    executer.module('attach events', selector, event)
    return this
  }

  export function show() {
    executer.module('show')
    return this
  }

  export function hide() {
    executer.module('hide')
    return this
  }

  export function toggle() {
    executer.module('toggle')
    return this
  }

  export function isVisible() {
    return executer.module('is visible')
  }

  export function isHidden() {
    return executer.module('is hidden')
  }

  export function pushPage() {
    executer.module('push page')
    return this
  }

  export function getDirection() {
    return executer.module('get direction')
  }

  export function pullPage() {
    executer.module('pull page')
    return this
  }

  export function addBodyCSS() {
    executer.module('add body CSS')
    return this
  }

  export function removeBodyCSS() {
    executer.module('remove body CSS')
    return this
  }

  export function getTransitionEvent() {
    return executer.module('get transition event')
  }
</script>

<JQueryLazyLoader>
  <SidebarLoader>
    <div
      bind:this="{$executer}"
      use:css="{style}"
      class:inverted
      class:vertical
      class="{classNames(
        _class,
        'ui',
        direction,
        { wide, visible, dimmed },
        'sidebar'
      )}"
    >
      <slot />
    </div>
  </SidebarLoader>
</JQueryLazyLoader>
