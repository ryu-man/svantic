<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/dimmer.min.css'

  import { css, classNames } from '../../utils'
  import { JQueryLazyLoader, DimmerLoader } from '../../loaders'

  let _class = ''
  export { _class as class }
  export let style = {}
  export let page = false
  export let disabled = false
  export let active = false
  export let state = ''
  export let aligned = ''
  export let shades = ''
  export let partial = ''
  export let inverted = false

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

    exec = (args) => jQuery(node).dimmer(args)
    exec(settings)
  }

  export function addContent(element) {
    exec('add content', element)
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

  export function setOpacity(opacity) {
    exec('set opacity', opacity)
    return exec
  }

  export function create() {
    exec('create')
    return exec
  }

  export function getDuration() {
    return exec('get duration')
  }

  export function getDimmer() {
    return exec('get dimmer')
  }

  export function hasDimmer() {
    return exec('has dimmer')
  }

  export function isActive() {
    return exec('is active')
  }

  export function isAnimating() {
    return exec('is animating')
  }

  export function isDimmer() {
    return exec('is dimmer')
  }

  export function isDimmable() {
    return exec('is dimmable')
  }

  export function isDisabled() {
    return exec('is disabled')
  }

  export function isEnabled() {
    return exec('is enabled')
  }

  export function isPage() {
    return exec('is page')
  }

  export function isPageDimmer() {
    return exec('isPageDimmer')
  }

  export function setActive() {
    exec('set active')
    return exec
  }

  export function setDimmable() {
    exec('set dimmable')
    return exec
  }

  export function setDimmed() {
    exec('set dimmed')
    return exec
  }

  export function setPageDimmer() {
    exec('setPageDimmer')
    return exec
  }

  export function setDisabled() {
    exec('set disabled')
    return exec
  }
</script>

<JQueryLazyLoader>
  <DimmerLoader>
    <div
      use:module="{settings}"
      class="{classNames(
        _class,
        'ui',
        shades,
        partial,
        state,
        { inverted, page, active, disabled, aligned },
        'dimmer'
      )}"
    >
      <slot />
    </div>
  </DimmerLoader>
</JQueryLazyLoader>
