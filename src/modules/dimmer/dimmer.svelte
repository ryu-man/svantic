<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/dimmer.min.css'

  import { css, classNames } from '../../utils'
  import { JQueryLazyLoader, DimmerLoader } from '../loaders'

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
    return this
  }

  export function show() {
    exec('show')
    return this
  }

  export function hide() {
    exec('hide')
    return this
  }

  export function toggle() {
    exec('toggle')
    return this
  }

  export function setOpacity(opacity) {
    exec('set opacity', opacity)
    return this
  }

  export function create() {
    exec('create')
    return this
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
    return this
  }

  export function setDimmable() {
    exec('set dimmable')
    return this
  }

  export function setDimmed() {
    exec('set dimmed')
    return this
  }

  export function setPageDimmer() {
    exec('setPageDimmer')
    return this
  }

  export function setDisabled() {
    exec('set disabled')
    return this
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
