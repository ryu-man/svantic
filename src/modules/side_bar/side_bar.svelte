<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/sidebar.min.css'
  import { css, classNames } from '../../utils'
  import JQueryLazyLoader from '../../loaders/JQueryLazyLoader.svelte'
  import SidebarLoader from '../../loaders/SidebarLoader.svelte'

  let _class
  export { _class as class }
  export let wide = ''
  export let visible = false
  export let dimmed = false
  export let direction = ''
  export let inverted = false
  export let vertical = false
  export let style

  /**
   * @type {SemanticUI.DropdownSettings.Param}
   */
  export let settings = {}

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

    exec = (args) => jQuery(node).sidebar(args)
    exec(settings)
  }

  export function attachEvents(selector, event) {
    exec('attach events', selector, event)
    return exec
  }

  export function show() {
    exec('show')
    return exec
  }

  export function hide() {
    exec('hide')
    return exec
  }

  export function toggle() {
    exec('toggle')
    return exec
  }

  export function isVisible() {
    return exec('is visible')
  }

  export function isHidden() {
    return exec('is hidden')
  }

  export function pushPage() {
    exec('push page')
    return exec
  }

  export function getDirection() {
    return exec('get direction')
  }

  export function pullPage() {
    exec('pull page')
    return exec
  }

  export function addBodyCSS() {
    exec('add body CSS')
    return exec
  }

  export function removeBodyCSS() {
    exec('remove body CSS')
    return exec
  }

  export function getTransitionEvent() {
    return exec('get transition event')
  }
</script>

<JQueryLazyLoader>
  <SidebarLoader>
    <div
      use:module="{settings}"
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
