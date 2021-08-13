<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/popup.min.css'

  import { css, classNames } from '../../utils'
  import { JQueryLazyLoader, PopupLoader } from '../loaders'

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
    return this
  }

  export function hide() {
    exec('hide')
    return this
  }

  export function hideAll() {
    exec('hide all')
    return this
  }

  export function getPopup() {
    exec('get popup')
    return this
  }

  export function changeContent(html) {
    exec('change content', html)
    return this
  }

  export function toggle() {
    exec('toggle')
    return this
  }

  export function isVisible() {
    return exec('is visible')
  }

  export function isHidden() {
    return exec('is hidden')
  }

  export function exists() {
    exec('exists')
    return this
  }

  export function reposition() {
    exec('reposition')
    return this
  }

  export function setPosition(position) {
    exec('set position', position)
    return this
  }

  export function removePopup() {
    exec('remove popup')
    return this
  }
</script>

<JQueryLazyLoader>
  <PopupLoader>
    <div use:module="{settings}" class="{classNames(_class, 'ui popup')}">
      <slot />
    </div>
  </PopupLoader>
</JQueryLazyLoader>
