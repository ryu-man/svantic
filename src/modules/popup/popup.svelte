<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/popup.min.css'

  import { css, classNames } from '../../utils'
  import { JQueryLazyLoader, PopupLoader } from '../../loaders'

  let _class = ''
  export { _class as class }
  export let style = {}

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

    exec = (args) => jQuery(node).popup(args)
    exec(settings)
  }

  export function show() {
    exec('show')
    return exec
  }

  export function hide() {
    exec('hide')
    return exec
  }

  export function hideAll() {
    exec('hide all')
    return exec
  }

  export function getPopup() {
    exec('get popup')
    return exec
  }

  export function changeContent(html) {
    exec('change content', html)
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

  export function exists() {
    exec('exists')
    return exec
  }

  export function reposition() {
    exec('reposition')
    return exec
  }

  export function setPosition(position) {
    exec('set position', position)
    return exec
  }

  export function removePopup() {
    exec('remove popup')
    return exec
  }
</script>

<JQueryLazyLoader>
  <PopupLoader>
    <div use:module="{settings}" class="{classNames(_class, 'ui popup')}">
      <slot />
    </div>
  </PopupLoader>
</JQueryLazyLoader>
