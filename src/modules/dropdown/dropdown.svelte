<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import '../../../semantic/dist/components/dropdown.min.css'

  import { css, classNames } from '../../utils'
  import { DropdownLoader } from '../../loaders'
  import JQueryLazyLoader from '../../loaders/JQueryLazyLoader.svelte'

  let _class = ''
  export { _class as class }
  export let style = {}
  export let size = ''
  export let wide = ''
  export let active = false
  export let disabled = false
  export let loading
  export let error = false
  export let speed = ''
  export let height = ''
  export let column
  export let menuDirection = ''
  export let link = false
  export let item = false
  export let long = false
  export let fluid = false
  export let label = false
  export let compact = false
  export let inverted = false
  export let scrolling = false
  export let selection = false
  export let search = false
  export let clearable = false
  export let multiple = false
  export let floating = false
  export let labeled = false
  export let icon = false
  export let button = false
  export let inline = false
  export let pointing = false
  export let simple = false
  export let onMount
  /**
   * @type {SemanticUI.DropdownSettings.Param}
   */
  export let settings = {}

  /**
   * @type {SemanticUI.Dropdown}
   */
  let exec = (args) => jQuery(node).dropdown(args)

  let _mounted

  /**
   *
   * @param node {HTMLDivElement}
   * @param settings
   */
  function module(node, settings) {
    css(node, style)
    exec = (args) => jQuery(node).dropdown(args)
    exec(settings)
    onMount?.()
  }

  /*********************************************************************************************/

  export function mounted(callback) {
    _mounted = callback
  }

  export function setSettings(settings) {
    exec(settings)
    return exec
  }

  export function setupMenu(values) {
    exec('setup menu', values)
    return exec
  }

  export function changeValues(values) {
    exec('change values', values)
    return exec
  }

  export function refresh() {
    exec('refresh')
    return exec
  }

  export function toggle() {
    exec('toggle')
    return exec
  }

  export function show(callback = () => {}, preventFocus = true) {
    exec('show', callback, preventFocus)
    return exec
  }

  export function hide(callback, preventBlur) {
    exec('hide', callback, preventBlur)
    return exec
  }

  export function clear(preventChangeTrigger) {
    exec('clear', preventChangeTrigger)
    return exec
  }

  export function hideOthers() {
    exec('hide others')
    return exec
  }

  export function restoreDefaults(preventChangeTrigger) {
    exec('restore defaults', preventChangeTrigger)
    return exec
  }

  export function restoreDefaultText() {
    exec('restore default')
    return exec
  }

  export function restorePlaceholderText() {
    exec('restore placeholder')
    return exec
  }

  export function restoreDefaultValue() {
    exec('restore default')
    return exec
  }

  export function saveDefaults() {
    exec('save defaults')
    return exec
  }

  export function setSelected(...args) {
    exec('set selected', ...args)
    return exec
  }

  export function removeSelected(value) {
    exec('remove selected', value)
    return exec
  }

  export function setExactly(...args) {
    exec('set exactly', ...args)
    return exec
  }

  export function setText(text) {
    exec('set text', text)
    return exec
  }

  export function setValue(value, text, $selected, preventChangeTrigger) {
    exec('set value', value, text, $selected, preventChangeTrigger)
    return exec
  }

  export function getText() {
    return exec('get text')
  }

  export function getValue() {
    return exec('get value')
  }

  export function getItem(value) {
    return exec('get item', value)
  }

  export function bindTouchEvents() {
    exec('bind touch')
    return exec
  }

  export function bindMouseEvents() {
    exec('bind mouse')
    return exec
  }

  export function bindIntent() {
    exec('bind intent')
    return exec
  }

  export function unbindIntent() {
    exec('unbind intent')
    return exec
  }

  export function determineEventInModule() {
    exec('determine eventInModule')
    return exec
  }

  export function determineSelectAction(text, value) {
    exec('determine select', text, value)
    return exec
  }

  export function setActive() {
    exec('set active')
    return exec
  }

  export function setVisible() {
    exec('set visible')
    return exec
  }

  export function removeActive() {
    exec('remove active')
    return exec
  }

  export function removeVisible() {
    exec('remove visible')
    return exec
  }

  export function isSelection() {
    return exec('is selection')
  }

  export function isAnimated() {
    return exec('is animated')
  }

  export function isVisible() {
    return exec('is visible')
  }

  export function isHidden() {
    return exec('is hidden')
  }

  export function getDefaultText() {
    return exec('get default')
  }

  export function getPlaceholderText() {
    return exec('get placeholder')
  }
</script>

<JQueryLazyLoader>
  <DropdownLoader>
    <div
      use:module="{settings}"
      class="{classNames(
        _class,
        'ui',
        height,
        column,
        speed,
        wide,
        size,
        menuDirection,
        {
          link,
          item,
          long,
          fluid,
          label,
          compact,
          scrolling,
          inverted,
          active,
          disabled,
          loading,
          error,
          selection,
          search,
          clearable,
          multiple,
          floating,
          labeled,
          icon,
          button,
          inline,
          pointing,
          simple
        },
        'dropdown'
      )}"
    >
      <slot />
    </div>
  </DropdownLoader>
</JQueryLazyLoader>
