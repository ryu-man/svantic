<script>
  import '../../../semantic/dist/components/site.min.css'
  import '../../../semantic/dist/components/reset.min.css'
  import '../../../semantic/dist/components/transition.min.css'
  import { css, classNames } from '../../utils'
  import { DropdownLoader } from '../loaders'
  import JQueryLazyLoader from '../loaders/JQueryLazyLoader.svelte'

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
  /**
   * @type {SemanticUI.DropdownSettings.Param}
   */
  export let settings = {}

  /**
   * @type {SemanticUI.Dropdown}
   */
  let exec
  function module(node, settings) {
    debugger
    css(node, style)
    console.log(node)

    /**
     * @type {JQueryStatic}
     */
    const jQuery = window['jQuery']

    exec = jQuery(node).dropdown(args)
    console.log(exec)
    exec(settings)
  }

  /*********************************************************************************************/

  export function setSettings(settings) {
    exec(settings)
    return this
  }

  export function setupMenu(values) {
    exec('setup menu', values)
    return this
  }

  export function changeValues(values) {
    exec('change values', values)
    return this
  }

  export function refresh() {
    exec('refresh')
    return this
  }

  export function toggle() {
    exec('toggle')
    return this
  }

  export function show(callback = () => {}, preventFocus = true) {
    exec('show', callback, preventFocus)
    return this
  }

  export function hide(callback, preventBlur) {
    exec('hide', callback, preventBlur)
    return this
  }

  export function clear(preventChangeTrigger) {
    exec('clear', preventChangeTrigger)
    return this
  }

  export function hideOthers() {
    exec('hide others')
    return this
  }

  export function restoreDefaults(preventChangeTrigger) {
    exec('restore defaults', preventChangeTrigger)
    return this
  }

  export function restoreDefaultText() {
    exec('restore default')
    return this
  }

  export function restorePlaceholderText() {
    exec('restore placeholder')
    return this
  }

  export function restoreDefaultValue() {
    exec('restore default')
    return this
  }

  export function saveDefaults() {
    exec('save defaults')
    return this
  }

  export function setSelected(...args) {
    exec('set selected', ...args)
    return this
  }

  export function removeSelected(value) {
    exec('remove selected', value)
    return this
  }

  export function setExactly(...args) {
    exec('set exactly', ...args)
    return this
  }

  export function setText(text) {
    exec('set text', text)
    return this
  }

  export function setValue(value, text, $selected, preventChangeTrigger) {
    exec('set value', value, text, $selected, preventChangeTrigger)
    return this
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
    return this
  }

  export function bindMouseEvents() {
    exec('bind mouse')
    return this
  }

  export function bindIntent() {
    exec('bind intent')
    return this
  }

  export function unbindIntent() {
    exec('unbind intent')
    return this
  }

  export function determineEventInModule() {
    exec('determine eventInModule')
    return this
  }

  export function determineSelectAction(text, value) {
    exec('determine select', text, value)
    return this
  }

  export function setActive() {
    exec('set active')
    return this
  }

  export function setVisible() {
    exec('set visible')
    return this
  }

  export function removeActive() {
    exec('remove active')
    return this
  }

  export function removeVisible() {
    exec('remove visible')
    return this
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
    <select
      use:module="{settings}"
      multiple="{multiple}"
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
    </select>
  </DropdownLoader>
</JQueryLazyLoader>
